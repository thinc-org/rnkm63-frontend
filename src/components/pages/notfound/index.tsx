import { ErrorDisplay, ErrorLink } from 'components/common/Error'
import React from 'react'
import { useTranslation } from 'react-i18next'

function NotFound() {
  const { t } = useTranslation('errors')
  return (
    <ErrorDisplay title={t('notfound.title')} detail={t('notfound.detail')}>
      <ErrorLink to="/">{t('returnHome')}</ErrorLink>
    </ErrorDisplay>
  )
}

export default NotFound
