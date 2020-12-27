import { Box, Container, makeStyles, ThemeProvider } from '@material-ui/core'
import ErrorProvider from 'components/ErrorProvider'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'routing/Routes'

import { Loading } from './components/common'
import { Footer, Header } from './components/shell'
import theme from './config/theme'
import { UserProvider } from './contexts/UserContext'
import { BgBottom, BgLeft, BgTop } from './local/backgrounds'

const useStyles = makeStyles({
  AppContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  BackgroundContainer: {
    flex: 1,
    minWidth: '280px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#212121',
    backgroundImage: `url(${BgTop}), url(${BgBottom}), url(${BgLeft})`,
    backgroundPosition: 'right top, right bottom, left top',
    backgroundSize: '62.5vw 7.3vw, 37.5vw 14.6vw, 14.6vw 37.5vw',
    backgroundRepeat: 'no-repeat',
  },
  PageContainer: {
    flex: 1,
  },
})

function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Box className={classes.AppContainer}>
          <Router>
            <Box className={classes.BackgroundContainer} color="text.primary">
              <Header />
              <Container className={classes.PageContainer}>
                <ErrorProvider>
                  <React.Suspense fallback={<Loading />}>
                    <Routes />
                  </React.Suspense>
                </ErrorProvider>
              </Container>
            </Box>
          </Router>
          <Footer />
        </Box>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
