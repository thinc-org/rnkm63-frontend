import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
  Button,
  Box,
} from '@material-ui/core'

// import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import BugReportOutlinedIcon from '@material-ui/icons/BugReportOutlined'

import { green, red } from '@material-ui/core/colors'

import { Link } from 'react-router-dom'
import LogOutButton from './LogOutButton'

const useStyles = makeStyles({
  eachList: {
    color: 'white',
    textTransform: 'none',
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
  const { t } = useTranslation('shell')

  return (
    <React.Fragment>
      <List>
        <ListItem>
          <Button className={classes.eachList} component={Link} to={'/'}>
            <ListItemIcon className={classes.HomeSchIcon}>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <Box fontSize={16} fontWeight="fontWeightBold">
              {t('home')}
            </Box>
          </Button>
        </ListItem>

        <ListItem>
          <Button
            href="https://airtable.com/shrdg6IwqtKmNMfkL"
            target="__blank__"
            className={classes.eachList}
          >
            <ListItemIcon className={classes.HomeSchIcon}>
              <BugReportOutlinedIcon />
            </ListItemIcon>
            <Box fontSize={16} fontWeight="fontWeightBold">
              {t('report')}
            </Box>
          </Button>
        </ListItem>

        {/* For Phase 2 */}
        {/* <ListItem className={classes.eachList} component={Link} to={'/'}> }
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

        <ListItem>
          <LogOutButton className={classes.eachList}>
            <ListItemIcon className={classes.logOut}>
              <MeetingRoomIcon />
            </ListItemIcon>
            <Box
              fontSize={16}
              fontWeight="fontWeightBold"
              className={classes.logOut}
              color="secondary"
            >
              {t('logout')}
            </Box>
          </LogOutButton>
        </ListItem>
      </List>
    </React.Fragment>
  )
}

export default ItemDrawer
