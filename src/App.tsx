import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie';

import { Header, Footer } from './components/shell'
import { Profile, Form, Login, NotFound } from './components/pages'

import { UserProvider } from './contexts/UserContext'
import { Container, Box, makeStyles } from '@material-ui/core'

import background from './local/background.png'

import LoginPage from './pages/LoginPage';
import WaitForVerificationPage from "./pages/WaitForVerificationPage"

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
    <CookiesProvider>
      <UserProvider>
        <Router>
          <Box className={classes.AppContainer}>
            <Header />
            <Container className={classes.PageContainer}>
              <Switch>
                <Route path="/login" exact>
                  <LoginPage />
                </Route>
                <Route path="/form" exact>
                  <Form />
                </Route>
                <Route path="/" exact>
                  <Profile />
                </Route>
                <Route>
                  <NotFound />
                </Route>
              </Switch>
            </Container>
            <Footer />
          </Box>
        </Router>
      </UserProvider>
    </CookiesProvider>
  )
}

export default App
