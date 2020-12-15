import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import theme from '../../../config/theme'
const useStyles = makeStyles({
  button: {
    marginTop: '20px',
    width: '210px',
    height: '40px',
    backgroundColor: '#44AD53',
    borderRadius: '40px',
    color: 'white',
    fontSize: '18px',
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      button: {
        width: '283px',
        height: '45px',
      },
    },
  },
})
function ToHomeButton() {
  const classes = useStyles()
  const { t } = useTranslation('tohomebutton')
  return (
    <Button variant="contained" className={classes.button} color="primary">
      {t('title')}
    </Button>
  )
}
export default ToHomeButton
