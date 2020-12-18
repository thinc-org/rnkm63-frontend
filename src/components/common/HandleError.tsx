import React from 'react'
import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import SadThincIcon from '../shell/misc/SadThincIcon'
import { Theme } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'

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

interface IError {
  requestID: string
  status: number
}

function HandleError(props: IError) {
  const { t } = useTranslation('error')
  const { requestID, status } = props

  const history = useHistory()

  if (status === 401 || status === 403) history.push('/login')
  const classes = useStyles()
  const reportProblem = React.useCallback(() => {
    window.location.href = !requestID
      ? 'https://airtable.com/shrdg6IwqtKmNMfkL'
      : 'https://airtable.com/shrdg6IwqtKmNMfkL?prefill_X-Request-ID=' +
        requestID
  }, [requestID])

  return (
    <Box className={classes.container}>
      <SadThincIcon />
      <Typography className={classes.textHeader}>
        {t(String(status))}
      </Typography>
      {props.status === 500 || props.status === 503 || props.status === 400 ? (
        <Button className={classes.button} onClick={reportProblem}>
          {t('report')}
        </Button>
      ) : (
        <Link to="/" component={Button} className={classes.button}>
          {t('returnHome')}
        </Link>
      )}
    </Box>
  )
}

export default HandleError
