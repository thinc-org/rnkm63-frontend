import { Box, Container, makeStyles, ThemeProvider } from '@material-ui/core'
import ErrorProvider, { fail } from 'components/ErrorProvider'
import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import { Loading } from './components/common'
import {
  Baan,
  Form,
  FormComplete,
  Login,
  Profile,
  Schedule,
} from './components/pages'
import { Footer, Header } from './components/shell'
import theme from './config/theme'
import { UserContext, UserProvider } from './contexts/UserContext'
import BackgroundImg from './local/background.png'

const useStyles = makeStyles({
  AppContainer: {
    minHeight: '100vh',
    minWidth: '280px',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url(${BackgroundImg})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  },
  PageContainer: {
    flex: 1,
  },
})

function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box className={classes.AppContainer} color="text.primary">
          <ErrorProvider>
            <UserProvider>
              <Header />
              <Container className={classes.PageContainer}>
                <React.Suspense fallback={<Loading />}>
                  <RoutesGuard />
                </React.Suspense>
              </Container>
              <Footer />
            </UserProvider>
          </ErrorProvider>
        </Box>
      </Router>
    </ThemeProvider>
  )
}

function RoutesGuard() {
  const { user, isLoaded, error } = React.useContext(UserContext)
  if (!isLoaded) return <Loading />
  else if (error || !user) {
    if (error?.status === 401 || error?.status === 403) {
      // still don't have a better way to determine if a user is logged in
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
    return (
      <Switch>
        <Route path="/form" exact component={Form} />
        <Route path="/form/complete" exact component={FormComplete} />
        <Route component={Junction} />
      </Switch>
    )
  } else {
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

function Junction() {
  const { user, isLoaded, error } = React.useContext(UserContext)
  if (!isLoaded) return <Loading />
  else if (error || !user) {
    if (error?.status === 401 || error?.status === 403) {
      // still don't have a better way to determine if a user is logged in
      return <Redirect to="/login" />
    } else {
      return fail(error)
    }
  } else if (!user.isConfirm) {
    return <Redirect to="/form" />
  } else {
    return <Redirect to="/" />
  }
}

export default App
