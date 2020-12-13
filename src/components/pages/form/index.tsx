import React from 'react'
import './Form.css'

import { useTranslation } from 'react-i18next'

function Form() {
  const { t } = useTranslation('form')
  return (
    <div className="Form">
      <h1>{t('title')}</h1>
    </div>
  )
}

export default Form
