import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
} from '@material-ui/core'
import { green, red } from '@material-ui/core/colors'
import BugReportOutlinedIcon from '@material-ui/icons/BugReportOutlined'
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import { UserContext } from 'contexts/UserContext'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import LogOutButton from './LogOutButton'

const useStyles = makeStyles({
  eachList: {
    flex: 1,
    justifyContent: 'flex-start',
    textTransform: 'none',
    transitionDuration: '0.15s',
    transitionProperty: 'opacity',
    '&:hover': {
      opacity: '0.5',
    },
  },
  selectBaan: {
    color: green[500],
  },
  logOut: {
    color: red[400],
  },
})

const ItemDrawer = () => {
  const classes = useStyles()
  const { t } = useTranslation('shell')
  const { error: userError, user: userInfo } = React.useContext(UserContext)

  return (
    <React.Fragment>
      <List>
        <ListItem>
          <Button className={classes.eachList} component={Link} to={'/'}>
            <ListItemIcon>
              <HomeOutlinedIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <Box fontSize={16} fontWeight="fontWeightBold">
              {t('home')}
            </Box>
          </Button>
        </ListItem>

        {!userError && (
          <ListItem component={Link} to={'/baan'}>
            <Button className={classes.eachList}>
              <ListItemIcon className={classes.selectBaan}>
                <HomeOutlinedIcon />
              </ListItemIcon>
              <Box
                fontSize={16}
                fontWeight="fontWeightBold"
                className={classes.selectBaan}
              >
                {userInfo?.currentBaan !== 0 ? t('changeBaan') : t('joinBaan')}
              </Box>
            </Button>
          </ListItem>
        )}

        {!userError && (
          <ListItem component={Link} to={'/schedule'}>
            <Button className={classes.eachList}>
              <ListItemIcon>
                <EventNoteRoundedIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <Box fontSize={16} fontWeight="fontWeightBold">
                {t('schedule')}
              </Box>
            </Button>
          </ListItem>
        )}

        <ListItem>
          <Button
            href="https://airtable.com/shrdg6IwqtKmNMfkL"
            target="__blank__"
            className={classes.eachList}
          >
            <ListItemIcon>
              <BugReportOutlinedIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <Box fontSize={16} fontWeight="fontWeightBold">
              {t('report')}
            </Box>
          </Button>
        </ListItem>

        {(!userError || (userError?.status && userError.status >= 500)) && (
          <ListItem>
            <LogOutButton className={classes.eachList}>
              <ListItemIcon className={classes.logOut}>
                <MeetingRoomIcon />
              </ListItemIcon>
              <Box
                fontSize={16}
                fontWeight="fontWeightBold"
                className={classes.logOut}
              >
                {t('logout')}
              </Box>
            </LogOutButton>
          </ListItem>
        )}
      </List>
    </React.Fragment>
  )
}

export default ItemDrawer
