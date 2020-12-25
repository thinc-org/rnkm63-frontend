import { Box, Container, makeStyles, ThemeProvider } from '@material-ui/core'
import ErrorProvider from 'components/ErrorProvider'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'routing/Routes'

import { Loading } from './components/common'
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
    <ThemeProvider theme={theme}>
      <Router>
        <Box className={classes.AppContainer} color="text.primary">
          <UserProvider>
            <Header />
            <Container className={classes.PageContainer}>
              <ErrorProvider>
                <React.Suspense fallback={<Loading />}>
                  <Routes />
                </React.Suspense>
              </ErrorProvider>
            </Container>
            <Footer />
          </UserProvider>
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App
