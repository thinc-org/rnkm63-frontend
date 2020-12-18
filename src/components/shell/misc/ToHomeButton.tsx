import React from 'react'
import Button from '@material-ui/core/Button'
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import theme from '../../../config/theme'
import { green } from '@material-ui/core/colors'
import { Link } from 'react-router-dom'
const useStyles = makeStyles({
  button: {
    width: '210px',
    height: '40px',
    backgroundColor: '#44AD53',
    borderRadius: '40px',
    marginTop: '20px',
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

const greenTheme = createMuiTheme({ palette: { primary: green } })
function ToHomeButton() {
  const classes = useStyles()
  const { t } = useTranslation('tohomebutton')
  return (
    <MuiThemeProvider theme={greenTheme}>
      <Button
        component={Link}
        to={'/'}
        variant="contained"
        className={classes.button}
        color="primary"
      >
        {t('title')}
      </Button>
    </MuiThemeProvider>
  )
}
export default ToHomeButton
