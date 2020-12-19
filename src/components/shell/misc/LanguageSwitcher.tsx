import React from 'react'
import { makeStyles, Button, Box } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles({
  Button: {
    backgroundColor: 'rgba(128,128,128,0.2)',
    width: '6rem',
    height: '2.5rem',
  },
  Lang: {
    zIndex: 10,
    position: 'absolute',
    top: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  Th: {
    left: 0,
    right: '50%',
  },
  En: {
    left: '50%',
    right: 0,
  },
  Overlay: {
    margin: 0,
    zIndex: 9,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '25%',
    right: '25%',
    backgroundColor: '#44ad53',
    borderRadius: 4,
    transitionDuration: '0.15s',
    transitionProperty: 'transform',
  },
  OverlayLeft: {
    transform: 'translateX(-50%)',
  },
  OverlayRight: {
    transform: 'translateX(50%)',
  },
})

function LanguageSwitcher() {
  const { i18n } = useTranslation('shell')
  const classes = useStyles()
  const language = i18n.language

  const switchLng = React.useCallback(() => {
    if (language.startsWith('th')) {
      i18n.changeLanguage('en')
    } else {
      i18n.changeLanguage('th')
    }
  }, [i18n, language])
  return (
    <Button onClick={switchLng} className={classes.Button} disableElevation>
      <Box
        className={`${classes.Overlay} ${
          language.startsWith('th') ? classes.OverlayLeft : classes.OverlayRight
        }`}
      ></Box>
      <Box className={`${classes.Lang} ${classes.Th}`}>
        <span>TH</span>
      </Box>
      <Box className={`${classes.Lang} ${classes.En}`}>
        <span>EN</span>
      </Box>
    </Button>
  )
}

export default LanguageSwitcher
