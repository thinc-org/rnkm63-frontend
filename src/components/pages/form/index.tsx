import React from 'react'

import { useTranslation } from 'react-i18next'

import { Box } from '@material-ui/core'

function Form() {
  const { t } = useTranslation('form')
  return (
    <Box>
      <h1>{t('title')}</h1>
    </Box>
  )
}

export default Form
