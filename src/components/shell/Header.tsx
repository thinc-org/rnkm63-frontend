import React from 'react'
import { Link } from 'react-router-dom'

import { Box, makeStyles } from '@material-ui/core'

import { withSuspense } from '../hoc'
import LanguageSwitcher from './misc/LanguageSwitcher'
import { UserContext } from '../../contexts/UserContext'

const useStyles = makeStyles({
  Header: {
    minHeight: '8vh',
    border: '2px solid red',
  },
})

function Header() {
  const { user } = React.useContext(UserContext)
  const classes = useStyles()
  return (
    <Box className={classes.Header}>
      <h1>HEADER GOES HERE</h1>

      {
        /*
          This is an example of how you might check if the user is logged in
          The <Link> component should also be very useful. Check out <NavLink> too!
          */
        user ? (
          <h5>{`Logged in as ${user.name}`}</h5>
        ) : (
          <Link to="/login">Login</Link>
        )
      }
      <LanguageSwitcher />
    </Box>
  )
}

export default withSuspense(Header)
