import React from 'react'

import { Box, Button, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import { useTranslation } from 'react-i18next'
import { completeStyle } from '../style'

function FormComplete() {
  const { t } = useTranslation('formComplete')
  const style = completeStyle()
  const history = useHistory()
  const goHome = React.useCallback(() => {
    history.push('/')
  }, [history])
  return (
    <Box className={style.container}>
      <Typography className={style.title}>{t('title')}</Typography>
      <Typography className={style.description}>{t('description')}</Typography>
      <Button className={style.button} onClick={goHome}>
        {t('back')}
      </Button>
    </Box>
  )
}

export default FormComplete
