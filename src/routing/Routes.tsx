import { Loading } from 'components/common'
import { fail } from 'components/ErrorProvider'
import {
  Baan,
  Form,
  FormComplete,
  Login,
  Profile,
  Schedule,
} from 'components/pages'
import { UserContext } from 'contexts/UserContext'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

export default function Routes() {
  // The UserContext contains all the information needed to decide which pages
  //   the user should be able to access
  const { user, isLoaded, error } = React.useContext(UserContext)
  if (!isLoaded) return <Loading />
  // If not loaded, wait
  else if (error || !user) {
    if (error?.status === 401 || error?.status === 403) {
      // still don't have a better way to determine if a user is logged in

      // User is not logged in. Only page allowed is Login
      return (
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route component={Junction} />
        </Switch>
      )
    } else {
      return fail(error)
    }
  } else if (!user.isConfirm) {
    // User hasn't confirmed yet. Show forms.
    return (
      <Switch>
        <Route path="/form" exact component={Form} />
        <Route path="/form/complete" exact component={FormComplete} />
        <Route component={Junction} />
      </Switch>
    )
  } else {
    // User is confirmed. Allow access to profile, baan, and schedule
    return (
      <Switch>
        <Route path="/baan" exact component={Baan} />
        <Route path="/schedule" exact component={Schedule} />
        <Route path="/" exact component={Profile} />
        <Route component={Junction} />
      </Switch>
    )
  }
}

// Junction should redir
function Junction() {
  const { user, error } = React.useContext(UserContext)
  if (error || !user) {
    if (error?.status === 401 || error?.status === 403) {
      // still don't have a better way to determine if a user is logged in
      return <Redirect to="/login" />
    } else {
      // If not 401 or 403 then we have no idea what happened
      return fail(error)
    }
  } else if (!user.isConfirm) {
    // Default place to go for unconfirmed user
    return <Redirect to="/form" />
  } else {
    // Default place to go for confirmed user
    return <Redirect to="/" />
  }
}
