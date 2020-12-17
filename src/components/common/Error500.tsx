import React from 'react'
import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import SadThincIcon from '../shell/misc/SadThincIcon'
import ToHomeButton from '../shell/misc/ToHomeButton'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
    alignItems: 'center',
  },
  textHeader: {
    color: 'white',
    fontSize: '1.375rem',
    fontWeight: 700,
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      fontSize: '3.75rem',
    },
  },
  button: {
    width: '283px',
    height: '45px',
    backgroundColor: theme.palette.success.main,
    borderRadius: '40px',
    fontSize: '1.125rem',
    marginTop: theme.spacing(4),

    marginBottom: theme.spacing(4),
    fontWeight: 700,
    '&:hover': {
      background: theme.palette.success.main,
    },
    [theme.breakpoints.up('sm')]: {
      button: {
        width: '210px',
        height: '40px',
      },
    },
  },
}))

function Error500(props: { requestID: string }) {
  const { t } = useTranslation('error500')
  const classes = useStyles()
  const reportProblem = React.useCallback((requestID) => {
    if (props.requestID != null)
      window.location.href =
        'https://airtable.com/shrdg6IwqtKmNMfkL?prefill_X-Request-ID=' +
        props.requestID
    else window.location.href = 'https://airtable.com/shrdg6IwqtKmNMfkL'
  }, [])

  return (
    <Box className={classes.container}>
      <SadThincIcon />
      <Typography className={classes.textHeader}>{t('title')}</Typography>
      <Button
        variant="contained"
        className={classes.button}
        color="primary"
        onClick={reportProblem}
      >
        {t('report')}
      </Button>
    </Box>
  )
}

export default Error500
