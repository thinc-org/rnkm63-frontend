import React from 'react'

import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme: any) => ({
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    transform: 'translate(-50%, -50%)',
  },
  title: {
    fontWeight: 700,
    fontSize: '1.375rem',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      fontWeight: 500,
      fontSize: '3.75rem',
    },
  },
  description: {
    marginTop: theme.spacing(2),
    fontWeight: 500,
    width: 220,
    margin: 'auto',
    fontSize: '0.875rem',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(3),
      width: '100%',
      fontSize: '1.25rem',
    },
  },
  button: {
    margin: 'auto',
    display: 'block',
    width: '206px',
    borderRadius: '40px',
    fontWeight: 700,
    fontSize: '1.375rem',
    textTransform: 'none',
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.success.main,
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(5),
      fontSize: '1.125rem',
    },
  },
}))

function FormComplete() {
  const { t, i18n } = useTranslation('formComplete')
  const style = useStyles({ lang: i18n.language })
  const history = useHistory()
  const goHome = React.useCallback(() => {
    history.push('/')
  }, [history])
  return (
    <Box className={style.container}>
      <Typography className={style.title}>{t('title')}</Typography>
      <Typography className={style.description}>{t('description')}</Typography>
      <Button className={style.button} onClick={goHome}>
        {t('back')}
      </Button>
    </Box>
  )
}

export default FormComplete
