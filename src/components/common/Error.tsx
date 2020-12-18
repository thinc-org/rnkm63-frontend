import React from 'react'
import {
  Box,
  Button,
  Typography,
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core'
import SadThincIcon from '../shell/misc/SadThincIcon'
import { Theme } from '@material-ui/core'
import { Link } from 'react-router-dom'
import LinkButton from './LinkButton'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import theme from '../../config/theme'

const greenButtonTheme = createMuiTheme({
  palette: {
    primary: theme.palette.success,
    secondary: theme.palette.error,
  },
})

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
    alignItems: 'center',
  },
  titleText: {
    fontSize: '3rem',
    fontWeight: 700,
    marginTop: theme.spacing(4),
  },
  detailText: {
    fontSize: '1.5rem',
    fontWeight: 500,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    width: '15rem',
    height: '3rem',
    borderRadius: '1.5rem',
    fontSize: '1.125rem',
    marginTop: theme.spacing(4),
    fontWeight: 700,
    [theme.breakpoints.up('sm')]: {
      button: {
        width: '12rem',
        height: '3rem',
      },
    },
  },
}))

export function ErrorButton(props: any) {
  const classes = useStyles()
  return (
    <Button
      className={classes.button}
      color="primary"
      variant="contained"
      {...props}
    />
  )
}

export function ErrorLink(props: any) {
  const classes = useStyles()
  return (
    <Link
      component={LinkButton}
      className={classes.button}
      color="primary"
      variant="contained"
      {...props}
    />
  )
}

interface IError {
  title: string
  detail?: string
  children: JSX.Element | JSX.Element[]
}

function Error({ title, detail, children }: IError) {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <SadThincIcon />
      <Typography className={classes.titleText}>{title}</Typography>
      {!!detail && (
        <Typography className={classes.detailText}>{detail}</Typography>
      )}
      <Box className={classes.buttonsContainer}>
        <ThemeProvider theme={greenButtonTheme}>{children}</ThemeProvider>
      </Box>
    </Box>
  )
}

interface IRequestError {
  requestID: string
  status: number
}

export function HandleRequestError(props: IRequestError) {
  const { t } = useTranslation('errors')
  const { requestID, status } = props

  const history = useHistory()

  if (status === 401 || status === 403) history.push('/login')
  const reportProblem = React.useCallback(() => {
    window.location.href = !requestID
      ? 'https://airtable.com/shrdg6IwqtKmNMfkL'
      : 'https://airtable.com/shrdg6IwqtKmNMfkL?prefill_X-Request-ID=' +
        requestID
  }, [requestID])
  return (
    <Error title={t(`code.${status}`)}>
      {props.status === 500 || props.status === 503 || props.status === 400 ? (
        <ErrorButton onClick={reportProblem}>{t('report')}</ErrorButton>
      ) : (
        <ErrorLink to="/">{t('returnHome')}</ErrorLink>
      )}
    </Error>
  )
}

export default Error
