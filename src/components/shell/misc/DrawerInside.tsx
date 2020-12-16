import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import { green, red } from '@material-ui/core/colors'

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'

import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import MenuIcon from '@material-ui/icons/Menu'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'

const useStyles = makeStyles({
  bgColor: {
    background: 'black',
    color: 'white',
  },
  eachList: {
    color: 'white',
    '&:hover': {
      opacity: '0.5',
    },
  },
  HomeSchIcon: {
    color: 'white',
  },
  selectBann: {
    color: green[500],
  },
  logOut: {
    color: red[400],
  },
})

type Anchor = 'control'

export default function DrawerInside() {
  const classes = useStyles()
  const { t } = useTranslation(['drawer'])
  const [state, setState] = React.useState({
    control: false,
  })

  const toggleDrawer = React.useCallback(() => {
    setState((state) => !state)
  }, [])

  const list = (anchor: Anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem className={classes.eachList} component={Link} to={'/'}>
          <ListItemIcon className={classes.HomeSchIcon}>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText>{t('Home')}</ListItemText>
        </ListItem>

        <ListItem className={classes.eachList} component={Link} to={'/'}>
          <ListItemIcon className={classes.HomeSchIcon}>
            <EventNoteRoundedIcon />
          </ListItemIcon>
          <ListItemText>{t('Schedule')}</ListItemText>
        </ListItem>

        <ListItem className={classes.eachList} component={Link} to={'/'}>
          <ListItemIcon className={classes.selectBann}>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText className={classes.selectBann}>
            {t('Bann')}
          </ListItemText>
        </ListItem>

        <ListItem className={classes.eachList} component={Link} to={'/'}>
          <ListItemIcon className={classes.logOut}>
            <MeetingRoomIcon />
          </ListItemIcon>
          <ListItemText className={classes.logOut}>{t('Logout')}</ListItemText>
        </ListItem>
      </List>
    </div>
  )

  return (
    <div>
      <MenuIcon onClick={toggleDrawer('control', true)} />
      <Drawer
        classes={{ paper: classes.bgColor }}
        anchor={'right'}
        open={state['control']}
        onClose={toggleDrawer('control', false)}
      >
        {list('control')}
      </Drawer>
    </div>
  )
}
