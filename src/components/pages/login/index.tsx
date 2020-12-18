import React from 'react'

import { Box, Card, Typography } from '@material-ui/core'
import LoginButton from './LoginButton'
import LoginCheckbox from './LoginCheckbox'
import { SendTicketToBack } from '../../../controllers/LoginController'
import { useTranslation } from 'react-i18next'
import indexStyle from './indexStyle'
import { withSuspense } from '../../hoc'

function Login() {
  const { t } = useTranslation('login')
  const [agree, setAgree] = React.useState(false)

  const style = indexStyle()

  React.useEffect(() => {
    let query = new URLSearchParams(window.location.search)
    let ticket = query.get('ticket')
    if (ticket !== null) {
      SendTicketToBack(ticket, () => {
        console.log('work')
        //history.push('/')
      })
    }
  }, [])

  const toggleAgree = () => {
    setAgree(!agree)
  }

  return (
    <Box className={style.login}>
      <Typography className={style.title}>{t('title')}</Typography>
      <Card className={style.container}>
        <Typography className={style.description}>
          {t('description')}
        </Typography>
        <LoginCheckbox update={toggleAgree} text={t('agreement')} />
        <LoginButton agree={agree}>{t('login')}</LoginButton>
      </Card>
    </Box>
  )
}

export default withSuspense(Login)
