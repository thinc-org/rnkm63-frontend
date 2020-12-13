import React from 'react'
import Button from '@material-ui/core/Button'
import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
  const { t, i18n } = useTranslation('shell')

  const switchLng = React.useCallback(() => {
    if (i18n.language.startsWith('th')) {
      i18n.changeLanguage('en')
    } else {
      i18n.changeLanguage('th')
    }
  }, [i18n])
  return (
    <Button onClick={switchLng} variant="contained" color="primary">
      {t('switchLanguage')}
    </Button>
  )
}

export default LanguageSwitcher
