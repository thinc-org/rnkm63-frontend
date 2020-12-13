import React from 'react'

import { Box } from '@material-ui/core'

import { useTranslation } from 'react-i18next'

function Profile() {
  const { t } = useTranslation('profile')
  return (
    <Box>
      <h1>{t('someSampleText')}</h1>
    </Box>
  )
}

export default Profile
