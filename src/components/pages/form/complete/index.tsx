import React from 'react'

import { Box, Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next'
import { completeStyle } from '../style'

function FormComplete() {
  const { t } = useTranslation('formComplete')
  const style = completeStyle()
  return (
    <Box className={style.container}>
      <Typography className={style.title}>{t('title')}</Typography>
      <Typography className={style.description}>{t('description')}</Typography>
      <Link to="/" component={Button} className={style.button}>
        {t('back')}
      </Link>
    </Box>
  )
}

export default FormComplete
