import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'

import ItemDrawer from './ItemDrawer'

import { Drawer } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
  bgColor: {
    background: 'black',
    color: 'white',
  },
  iconPos: {
    fontSize: '2rem',
    margin: '0 1rem 1rem 1rem',
    position: 'relative',
    top: '1.6rem',
  },
})

export default function DrawerInside() {
  const classes = useStyles()
  const { t } = useTranslation(['drawer'])
  const [state, setState] = React.useState(false)

  const toggleDrawer = React.useCallback(() => {
    setState((state) => !state)
  }, [])

  const list = () => (
    <div role="presentation" onClick={toggleDrawer}>
      <ItemDrawer />
    </div>
  )

  return (
    <React.Fragment>
      <MenuIcon className={classes.iconPos} onClick={toggleDrawer} />
      <Drawer
        classes={{ paper: classes.bgColor }}
        anchor={'right'}
        open={state}
        onClose={toggleDrawer}
      >
        {list()}
      </Drawer>
    </React.Fragment>
  )
}
