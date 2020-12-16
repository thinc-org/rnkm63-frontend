import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
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
import { green, red } from '@material-ui/core/colors'
import { Link } from 'react-router-dom'

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
  const [state, setState] = React.useState({
    control: false,
  })

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    setState({ ...state, [anchor]: open })
  }

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
          <ListItemText>หน้าหลัก</ListItemText>
        </ListItem>

        <ListItem className={classes.eachList} component={Link} to={'/'}>
          <ListItemIcon className={classes.HomeSchIcon}>
            <EventNoteRoundedIcon />
          </ListItemIcon>
          <ListItemText>กำหนดการ</ListItemText>
        </ListItem>

        <ListItem className={classes.eachList} component={Link} to={'/'}>
          <ListItemIcon className={classes.selectBann}>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText className={classes.selectBann}>เลือกบ้าน</ListItemText>
        </ListItem>

        <ListItem className={classes.eachList} component={Link} to={'/'}>
          <ListItemIcon className={classes.logOut}>
            <MeetingRoomIcon />
          </ListItemIcon>
          <ListItemText className={classes.logOut}>Logout</ListItemText>
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
