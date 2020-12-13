import React from 'react'
import './Profile.css'

import { useTranslation } from 'react-i18next'

import { withSuspense } from '../../hoc'

function Profile() {
  const { t } = useTranslation('profile')
  return (
    <div className="Profile">
      <h1>{t('someSampleText')}</h1>
    </div>
  )
}

export default withSuspense(Profile)
