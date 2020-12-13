import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles({
  root: {
    background: '#D34949',
    border: 0,
    borderRadius: 20,
    color: 'white',
    width: 117,
    height: 53,
    padding: '0 5px',
    marginLeft: '31px',
    marginRight: '50px',
  },
  LogOutFont: {
    fontSize: '14px',
    textAlign: 'center',
    lineHeight: '22px',
  },
})
function LogOutButton() {
  const classes = useStyles()
  const { t } = useTranslation('logoutbutton')
  return (
    <Button variant="contained" className={classes.root}>
      <Typography className={classes.LogOutFont}>{t('title')}</Typography>
    </Button>
  )
}
export default LogOutButton
