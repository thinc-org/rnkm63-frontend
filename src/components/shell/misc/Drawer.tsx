import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import ItemDrawer from './DrawerItems'

import { Box, Drawer, IconButton, Theme } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    width: '2.5rem',
    height: '2.5rem',
    margin: '0.25rem',
  },
  icon: {
    fontSize: '2rem',
  },
}))

export default function DrawerButton() {
  const classes = useStyles()
  const [state, setState] = React.useState(false)

  const toggleDrawer = React.useCallback(() => {
    setState((state) => !state)
  }, [])

  return (
    <React.Fragment>
      <IconButton onClick={toggleDrawer} className={classes.button}>
        <MenuIcon className={classes.icon} style={{ color: 'white' }} />
      </IconButton>
      <Drawer anchor={'right'} open={state} onClose={toggleDrawer}>
        <Box role="presentation" onClick={toggleDrawer}>
          <ItemDrawer />
        </Box>
      </Drawer>
    </React.Fragment>
  )
}
