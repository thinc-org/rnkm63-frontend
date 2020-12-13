import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Header, Footer } from './components/shell'
import { Profile, Form, Login, NotFound } from './components/pages'

import { UserProvider } from './contexts/UserContext'
import { Container, Box, makeStyles } from '@material-ui/core'

import background from './local/background.png'
const useStyles = makeStyles({
  AppContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url(${background})`,
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
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/form" exact component={Form} />
              <Route path="/" exact component={Profile} />
              <Route component={NotFound} />
            </Switch>
          </Container>
          <Footer />
        </Box>
      </Router>
    </UserProvider>
  )
}

export default App
