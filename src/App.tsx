import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Container, Box, makeStyles } from '@material-ui/core'

import { Header, Footer } from './components/shell'
import { Profile, Form, Login, NotFound } from './components/pages'
import { Loading } from './components/common'
import { UserProvider } from './contexts/UserContext'

const useStyles = makeStyles({
  AppContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url(/background.png)`,
  },
  PageContainer: {
    flex: 1,
  },
})

function App() {
  const classes = useStyles()
  return (
    <UserProvider>
      <Router>
        <Box className={classes.AppContainer}>
          <Header />
          <Container className={classes.PageContainer}>
            <React.Suspense fallback={Loading}>
              <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/form" exact component={Form} />
                <Route path="/" exact component={Profile} />
                <Route component={NotFound} />
              </Switch>
            </React.Suspense>
          </Container>
          <Footer />
        </Box>
      </Router>
    </UserProvider>
  )
}

export default App
