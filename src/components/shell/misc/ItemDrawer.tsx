import React from 'react'
import { useTranslation } from 'react-i18next'
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

const ItemDrawer = () => {
  const classes = useStyles()
  const { t } = useTranslation(['drawer'])
  return (
    <React.Fragment>
      <List>
        <ListItem className={classes.eachList} component={Link} to={'/'}>
          <ListItemIcon className={classes.HomeSchIcon}>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText>{t('Home')}</ListItemText>
        </ListItem>

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
          <ListItemText className={classes.logOut}>{t('Logout')}</ListItemText>
        </ListItem>
      </List>
    </React.Fragment>
  )
}

export default ItemDrawer
