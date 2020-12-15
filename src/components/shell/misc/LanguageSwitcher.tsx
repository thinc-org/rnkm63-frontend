import React from 'react'
import { makeStyles, Button, Container } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import theme from '../../../config/theme'

const useStyles = makeStyles({
  TH: {
    backgroundColor: '#44AD53',
    color: 'white',
    borderRadius: 3,
  },
  THUsed: {
    backgroundColor: '#fff',
    color: 'white',
    borderRadius: 3,
  },
  EN: {
    backgroundColor: '#44AD53',
    color: 'white',
    borderRadius: 3,
  },
  ENUsed: {
    backgroundColor: '#fff',
    color: 'white',
    borderRadius: 3,
  },

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
      fontSize: '0.85em',
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
      fontSize: '0.85em',
      textAlign: 'center',
      lineHeight: '22px',
    },
  },
})

function LanguageSwitcher() {
  const { i18n } = useTranslation('shell')
  const classes = useStyles()
  const language = i18n.language

  console.log(classes)

  const switchLng = React.useCallback(() => {
    if (language === 'th') {
      i18n.changeLanguage('en')
    } else {
      i18n.changeLanguage('th')
    }
  }, [i18n, language])
  return (
    <Button onClick={switchLng} variant="contained">
      <Container className={language === 'th' ? classes.TH : classes.THUsed}>
        TH
      </Container>
      <Container className={language === 'th' ? classes.ENUsed : classes.EN}>
        EN
      </Container>
    </Button>
  )
}

export default LanguageSwitcher
