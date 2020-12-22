import Error, { ErrorLink } from 'components/common/Error'
import React from 'react'
import { useTranslation } from 'react-i18next'

function NotFound() {
  const { t } = useTranslation('errors')
  return (
    <Error title={t('notfound.title')} detail={t('notfound.detail')}>
      <ErrorLink to="/">{t('returnHome')}</ErrorLink>
    </Error>
  )
}

export default NotFound
