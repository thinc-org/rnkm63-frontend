import {
  Box,
  Card,
  createMuiTheme,
  ThemeProvider,
  Typography,
} from '@material-ui/core'
import Loading from 'components/common/Loading'
import { withSuspense } from 'components/hoc'
import { UserContext } from 'contexts/UserContext'
import { SendTicketToBack } from 'controllers/LoginController'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Redirect, useHistory } from 'react-router-dom'

import indexStyle from './indexStyle'
import LoginButton from './LoginButton'
import LoginCheckbox from './LoginCheckbox'

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Rubik', 'Kanit', 'sans-serif'].join(','),
  },
  palette: {
    type: 'light',
    primary: {
      main: '#44AD53', //green
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#000000', //black
    },
    background: {
      default: '#f1f1f1',
      paper: '#fff',
    },
  },
})

function Login() {
  const { t } = useTranslation('login')
  const [agree, setAgree] = React.useState(false)
  const [step, setStep] = React.useState(0)
  //STEP: 0 = start (not logged in). 1 = verifying ticket. 2 = ticket verified and cookie set. 3 = user loaded and everything done
  const history = useHistory()
  const style = indexStyle()
  const {
    load: loadUser,
    isLoaded: isUserLoaded,
    error: userLoadError,
  } = React.useContext(UserContext)

  const onLoginComplete = React.useCallback(() => {
    setStep(2) // We have finished verifying the ticket. The cookie is now set.
  }, [])

  const onLoginError = React.useCallback(
    (status: number) => {
      if (status === 403) history.push('/not104')
      else history.push('/')
    },
    [history]
  )

  React.useEffect(() => {
    let query = new URLSearchParams(window.location.search)
    let ticket = query.get('ticket')
    if (ticket !== null) {
      setStep(1) // We have the ticket. Now we are verifying it
      SendTicketToBack(ticket).then(onLoginComplete).catch(onLoginError)
    }
  }, [onLoginComplete, onLoginError])

  React.useEffect(() => {
    if (isUserLoaded && step === 2) {
      loadUser().then(() => {
        setStep(3) // We are done
      })
    }
  }, [isUserLoaded, loadUser, step])

  const toggleAgree = useCallback(() => {
    setAgree(!agree)
  }, [agree])

  if (isUserLoaded && !userLoadError) {
    // If we already have the user with no error whatsoever, then there is no reason to log in.
    // So we redirect to form.
    return <Redirect to="/form" />
  } else if (step === 1 || step === 2 || !isUserLoaded) {
    // If we are verifying the ticket OR waiting for get /user/profile, show <Loading />.
    return <Loading />
  } else if (step === 3 && isUserLoaded && userLoadError) {
    // If we finished everything, but the user loaded with error.
    return <Redirect to="/" />
  } else {
    // If we are neither waiting for anything nor showing any error, show to login UI.
    return (
      <Box className={style.login}>
        <Typography className={style.title}>{t('title')}</Typography>
        <ThemeProvider theme={theme}>
          <Card className={style.container} color="white">
            <Typography className={style.description}>
              {t('description')}
            </Typography>
            <LoginCheckbox update={toggleAgree} text={t('agreement')} />
            <LoginButton agree={agree}>{t('login')}</LoginButton>
          </Card>
        </ThemeProvider>
      </Box>
    )
  }
}

export default withSuspense(Login)
