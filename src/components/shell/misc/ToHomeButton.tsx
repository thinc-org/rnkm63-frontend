import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import theme from '../../../config/theme'
const useStyles = makeStyles({
  [theme.breakpoints.down('sm')]: {
    button: {
      marginTop: '20px',
      width: '283px',
      height: '45px',
      backgroundColor: '#44AD53',
      borderRadius: '40px',
    },
    buttonText: { color: 'white', fontSize: '18px' },
  },
  [theme.breakpoints.up('sm')]: {
    button: {
      marginTop: '20px',
      width: '210px',
      height: '40px',
      backgroundColor: '#44AD53',
      borderRadius: '40px',
    },
    buttonText: {
      color: 'white',
      fontFamily: 'Rubik',
      fontSize: '18px',
      fontWeight: 700,
    },
  },
})
function ToHomeButton() {
  const classes = useStyles()
  const { t } = useTranslation('tohomebutton')
  return (
    <Button variant="contained" className={classes.button} color="primary">
      <Typography className={classes.buttonText}>{t('title')}</Typography>
    </Button>
  )
}
export default ToHomeButton
