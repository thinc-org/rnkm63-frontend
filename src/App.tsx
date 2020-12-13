import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Container, Box, ThemeProvider, makeStyles } from '@material-ui/core'
import theme from './config/theme'

import { Header, Footer } from './components/shell'
import { Profile, Form, Login, NotFound, NotFreshy } from './components/pages'
import { Loading } from './components/common'
import { UserProvider } from './contexts/UserContext'
import BackgroundImg from './local/background.png'

const useStyles = makeStyles({
  AppContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url(${BackgroundImg})`,
  },
  PageContainer: {
    flex: 1,
  },
})

function App() {
  const classes = useStyles()
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Box className={classes.AppContainer} color="text.primary">
            <Header />
            <Container className={classes.PageContainer}>
              <React.Suspense fallback={<Loading />}>
                <Switch>
                  <Route path="/login" exact component={Login} />
                  <Route path="/form" exact component={Form} />
                  <Route path="/not104" exact component={NotFreshy} />
                  <Route path="/" exact component={Profile} />
                  <Route component={NotFound} />
                </Switch>
              </React.Suspense>
            </Container>
            <Footer />
          </Box>
        </Router>
      </ThemeProvider>
    </UserProvider>
  )
}

export default App
