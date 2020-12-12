import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { Loading } from '../common'
import LanguageSwitcher from './misc/LanguageSwitcher'
import { UserContext } from '../../contexts/UserContext'

function HeaderSuspenseHOC() {
  return (
    <React.Suspense fallback={Loading}>
      <Header />
    </React.Suspense>
  )
}

function Header() {
  const user = React.useContext(UserContext)[0]
  return (
    <div className="Header">
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
    </div>
  )
}

export default HeaderSuspenseHOC
