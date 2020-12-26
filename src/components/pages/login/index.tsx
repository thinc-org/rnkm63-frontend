import {
  Box,
  Card,
  createMuiTheme,
  ThemeProvider,
  Typography,
} from '@material-ui/core'
import Loading from 'components/common/Loading'
import { fail, IFailure } from 'components/ErrorProvider'
import { withSuspense } from 'components/hoc'
import { UserContext } from 'contexts/UserContext'
import { SendTicketToBack } from 'controllers/LoginController'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

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
  const [isLoggingIn, setIsLoggingIn] = React.useState(true)
  //STEP: 0 = start (not logged in). 1 = verifying ticket. 2 = ticket verified and cookie set. 3 = user loaded and everything done
  const style = indexStyle()
  const { load: loadUser } = React.useContext(UserContext)

  const onVerifyComplete = React.useCallback(() => {
    setIsLoggingIn(false)
    loadUser()
  }, [loadUser])

  const onVerifyError = React.useCallback(
    (e: IFailure) => {
      if (e.status === 403)
        fail({
          ...e,
          title: t('not104'),
        })
      else fail(e)
    },
    [t]
  )

  React.useEffect(() => {
    let query = new URLSearchParams(window.location.search)
    let ticket = query.get('ticket')
    if (ticket !== null) {
      setIsLoggingIn(true)
      SendTicketToBack(ticket).then(onVerifyComplete).catch(onVerifyError)
    } else {
      setIsLoggingIn(false)
    }
  }, [onVerifyComplete, onVerifyError])

  const toggleAgree = useCallback(() => {
    setAgree(!agree)
  }, [agree])

  if (isLoggingIn) {
    // If we are verifying the ticket OR waiting for get /user/profile, show <Loading />.
    return <Loading />
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
