import { Box, makeStyles, ThemeProvider } from '@material-ui/core'
import { Loading } from 'components/common'
import { Footer } from 'components/shell'
import { UserProvider } from 'contexts/UserContext'
import { BgBottom, BgLeft, BgTop } from 'local/backgrounds'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'routing/Routes'

import theme from './config/theme'

const useStyles = makeStyles({
  AppContainer: {
    minHeight: '100vh',
    display: 'flex',
    minWidth: '280px',
    flexDirection: 'column',
  },
  BackgroundContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#212121',
    backgroundImage: `url(${BgTop}), url(${BgBottom}), url(${BgLeft})`,
    backgroundPosition: 'right top, right bottom, left top',
    backgroundSize: '62.5vw 7.3vw, 37.5vw 14.6vw, 14.6vw 37.5vw',
    backgroundRepeat: 'no-repeat',
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
              <React.Suspense fallback={<Loading />}>
                <Routes />
              </React.Suspense>
            </Box>
          </Router>
          <Footer />
        </Box>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
