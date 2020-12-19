import React from 'react'

import { Box, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import LinkButton from '../../../common/LinkButton'
import { UserContext } from '../../../../contexts/UserContext'

import { useTranslation } from 'react-i18next'
import { completeStyle } from '../style'

function FormComplete() {
  const { t } = useTranslation('formComplete')
  const style = completeStyle()
  const { load: loadUser } = React.useContext(UserContext)
  React.useEffect(() => {
    loadUser()
  }, [loadUser])
  return (
    <Box className={style.container}>
      <Typography className={style.title}>{t('title')}</Typography>
      <Typography className={style.description}>{t('description')}</Typography>
      <Link to="/" component={LinkButton} className={style.button}>
        {t('back')}
      </Link>
    </Box>
  )
}

export default FormComplete
