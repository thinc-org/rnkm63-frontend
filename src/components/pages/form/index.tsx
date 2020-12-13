import React from 'react'
import './Form.css'

import { useTranslation } from 'react-i18next'

import { withSuspense } from '../../hoc'

function Form() {
  const { t } = useTranslation('form')
  return (
    <div className="Form">
      <h1>{t('title')}</h1>
    </div>
  )
}

export default withSuspense(Form)
