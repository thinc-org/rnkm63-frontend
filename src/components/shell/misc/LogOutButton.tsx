import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import theme from '../../../config/theme'
const useStyles = makeStyles({
  button: {
    border: 0,
    borderRadius: 20,
    color: 'white',
    width: 117,
    height: 40,
    padding: '0 5px',
    marginLeft: '30px',
    marginRight: '50px',
    fontSize: '0.85em',
    textAlign: 'center',
    lineHeight: '22px',
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {},
  },
})
function LogOutButton() {
  const classes = useStyles()
  const { t } = useTranslation('logoutbutton')
  return (
    <Button variant="contained" color="secondary" className={classes.button}>
      {t('title')}
    </Button>
  )
}
export default LogOutButton
