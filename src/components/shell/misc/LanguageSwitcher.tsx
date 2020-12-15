import React from 'react'
import Button from '@material-ui/core/Button'
import { Box, makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import theme from '../../../config/theme'
import classes from '*.module.css'
const useStyles = makeStyles({
  [theme.breakpoints.down('sm')]: {
    button: {
      border: 0,
      borderRadius: 8.91,
      width: 89,
      height: 40,
      padding: '0 5px',
    },
    buttonText: {
      color: 'white',
      fontFamily: 'Rubik',
      fontSize: '14px',
      textAlign: 'center',
      lineHeight: '22px',
    },
  },
  [theme.breakpoints.up('sm')]: {
    button: {
      border: 0,
      borderRadius: 8.91,
      width: 89,
      height: 40,
      padding: '0 5px',
    },
    buttonText: {
      color: 'white',
      fontFamily: 'Rubik',
      fontSize: '14px',
      textAlign: 'center',
      lineHeight: '22px',
    },
  },
})
function LanguageSwitcher() {
  const { t, i18n } = useTranslation('shell')
  const switchLng = React.useCallback(() => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('th')
    } else {
      i18n.changeLanguage('en')
    }
  }, [i18n])
  return (
    <Button onClick={switchLng} variant="contained">
      <Button>TH</Button>
      <Button>EN</Button>
    </Button>
  )
}

export default LanguageSwitcher
