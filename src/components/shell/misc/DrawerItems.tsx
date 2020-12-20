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
import { UserContext } from '../../../contexts/UserContext'

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
  const { user, error: userError } = React.useContext(UserContext)

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
        {(!userError || userError.status >= 500) && (
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
