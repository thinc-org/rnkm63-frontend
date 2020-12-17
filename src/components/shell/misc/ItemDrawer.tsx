import React from 'react'
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  makeStyles,
} from '@material-ui/core'

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'

import { green, red } from '@material-ui/core/colors'

import { Link } from 'react-router-dom'

const useStyles = makeStyles({
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

interface changeLang {
  home: String
  logOut: String
}

const ItemDrawer = (props: changeLang) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <List>
        <ListItem className={classes.eachList} component={Link} to={'/'}>
          <ListItemIcon className={classes.HomeSchIcon}>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText>{props.home}</ListItemText>
        </ListItem>

        {/* for phase 2 */}
        {/* <ListItem className={classes.eachList} component={Link} to={'/'}>}
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
        </ListItem>*/}

        <ListItem className={classes.eachList} component={Link} to={'/'}>
          <ListItemIcon className={classes.logOut}>
            <MeetingRoomIcon />
          </ListItemIcon>
          <ListItemText className={classes.logOut}>{props.logOut}</ListItemText>
        </ListItem>
      </List>
    </React.Fragment>
  )
}

export default ItemDrawer
