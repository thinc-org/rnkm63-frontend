import { Box, Container, makeStyles, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Loading } from './components/common'
import {
  Baan,
  Form,
  FormComplete,
  Login,
  NotFound,
  NotFreshy,
  Profile,
  Schedule,
} from './components/pages'
import { Footer, Header } from './components/shell'
import theme from './config/theme'
import { UserProvider } from './contexts/UserContext'
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
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Box className={classes.AppContainer} color="text.primary">
            <Header />
            <Container className={classes.PageContainer}>
              <React.Suspense fallback={<Loading />}>
                <Switch>
                  <Route path="/select" exact component={SelectBaan} />
                  <Route path="/login" exact component={Login} />
                  <Route path="/form" exact component={Form} />
                  <Route path="/form/complete" exact component={FormComplete} />
                  <Route path="/not104" exact component={NotFreshy} />
                  <Route path="/baan" exact component={Baan} />
                  <Route path="/schedule" exact component={Schedule} />
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
