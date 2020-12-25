import { Box, Drawer, IconButton, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'

import ItemDrawer from './DrawerItems'

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    width: '2.5rem',
    height: '2.5rem',
    margin: '0.25rem',
    marginLeft: '-0.8rem',
  },
  icon: {
    fontSize: '2rem',
  },
}))

export default function DrawerButton() {
  const classes = useStyles()
  const [state, setState] = React.useState(false)

  const openDrawer = React.useCallback(() => {
    setState(true)
  }, [])
  const closeDrawer = React.useCallback(() => {
    setState(false)
  }, [])

  return (
    <React.Fragment>
      <IconButton onClick={openDrawer} className={classes.button}>
        <MenuIcon className={classes.icon} style={{ color: 'white' }} />
      </IconButton>
      <Drawer anchor={'right'} open={state} onClose={closeDrawer}>
        <Box role="presentation" onClick={closeDrawer}>
          <ItemDrawer />
        </Box>
      </Drawer>
    </React.Fragment>
  )
}
