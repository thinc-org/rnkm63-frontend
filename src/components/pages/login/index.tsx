import React from 'react'

import {
  Box,
  Card,
  Typography,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core'
import LoginButton from './LoginButton'
import LoginCheckbox from './LoginCheckbox'
import { SendTicketToBack } from '../../../controllers/LoginController'
import { useTranslation } from 'react-i18next'
import indexStyle from './indexStyle'
import { withSuspense } from '../../hoc'
import { useHistory, Redirect } from 'react-router-dom'
import { UserContext } from '../../../contexts/UserContext'
import Loading from '../../common/Loading'

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
  const [loading, setLoading] = React.useState(false)
  const history = useHistory()
  const style = indexStyle()
  const {
    load: loadUser,
    user,
    isLoaded: isUserLoaded,
    error: userLoadError,
  } = React.useContext(UserContext)

  const onLoginError = React.useCallback(
    (status: number) => {
      if (status === 403) {
        history.push('/not104')
      }
    },
    [history]
  )

  React.useEffect(() => {
    let query = new URLSearchParams(window.location.search)
    let ticket = query.get('ticket')
    if (ticket !== null) {
      setLoading(true)
      SendTicketToBack(ticket).then(loadUser).catch(onLoginError)
    }
  }, [loadUser, onLoginError])

  const toggleAgree = () => {
    setAgree(!agree)
  }

  if (isUserLoaded && user && !userLoadError) return <Redirect to="/form" />
  if (!isUserLoaded || loading) return <Loading />
  else
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

export default withSuspense(Login)
