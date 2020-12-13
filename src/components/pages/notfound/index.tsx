import React from 'react'
import './NotFound.css'

import { useTranslation } from 'react-i18next'

import { withSuspense } from '../../hoc'

function NotFound() {
  const { t } = useTranslation('notfound')
  return (
    <div className="NotFound">
      <h1>{t('title')}</h1>
    </div>
  )
}

export default withSuspense(NotFound)
