import React from 'react'
import { Box } from '@material-ui/core'

import { useTranslation } from 'react-i18next'

function NotFound() {
  const { t } = useTranslation('notfound')
  return (
    <Box>
      <h1>{t('title')}</h1>
    </Box>
  )
}

export default NotFound
