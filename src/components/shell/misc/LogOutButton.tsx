import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import theme from '../../../config/theme'
const useStyles = makeStyles({
  button: {
    border: 0,
    borderRadius: '1.25rem',
    color: 'white',
    width: '8rem',
    height: '2.5rem',
    margin: '0 1rem',
    fontSize: '0.85rem',
    textAlign: 'center',
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
