import Error, { ErrorLink } from 'components/common/Error'
import React from 'react'
import { useTranslation } from 'react-i18next'

function NotFreshy() {
  const { t } = useTranslation('errors')
  return (
    <Error title={t('not104.title')}>
      <ErrorLink to="/">{t('returnHome')}</ErrorLink>
    </Error>
  )
}

export default NotFreshy
