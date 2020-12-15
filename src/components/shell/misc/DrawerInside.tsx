import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import MenuIcon from '@material-ui/icons/Menu'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import { green, red } from '@material-ui/core/colors'

const useStyles = makeStyles({
  fullList: {
    width: 'auto',
  },
  bgColor: {
    background: 'black',
    color: 'white',
  },
  hovers: {
    '&:hover': {
      backgroundColor: '#333',
    },
  },
})

type Anchor = 'right'

export default function DrawerInside() {
  const classes = useStyles()
  const [state, setState] = React.useState({
    right: false,
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
      className={classes.fullList}
    >
      <List>
        <ListItem className={classes.hovers}>
          <ListItemIcon>
            <HomeOutlinedIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText>หน้าหลัก</ListItemText>
        </ListItem>

        <ListItem className={classes.hovers}>
          <ListItemIcon>
            <EventNoteRoundedIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText>กำหนดการ</ListItemText>
        </ListItem>

        <ListItem className={classes.hovers}>
          <ListItemIcon>
            <HomeOutlinedIcon style={{ color: green[500] }} />
          </ListItemIcon>
          <ListItemText style={{ color: green[500] }}>เลือกบ้าน</ListItemText>
        </ListItem>

        <ListItem className={classes.hovers}>
          <ListItemIcon>
            <MeetingRoomIcon style={{ color: red[400] }} />
          </ListItemIcon>
          <ListItemText style={{ color: red[400] }}>Logout</ListItemText>
        </ListItem>
      </List>
    </div>
  )

  return (
    <div>
      {(['right'] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
          <Drawer
            classes={{ paper: classes.bgColor }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
