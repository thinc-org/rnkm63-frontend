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
import { Link, Redirect } from 'react-router-dom'
import LinkButton, { LinkButtonProps } from './LinkButton'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import theme from '../../config/theme'
import { ButtonProps } from '@material-ui/core/Button'

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

interface ErrorButtonProps extends ButtonProps {
  target: string
  href: string
}

export function ErrorButton(props: ErrorButtonProps) {
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

interface ErrorLinkProps extends ButtonProps {
  to: string
  replace?: boolean
}

export function ErrorLink(props: ErrorLinkProps) {
  const classes = useStyles()
  const { to, replace, ...button } = props
  const comp = (props: LinkButtonProps) => (
    <LinkButton
      {...button}
      {...props}
      className={classes.button}
      color="primary"
      variant="contained"
    />
  )
  return <Link component={comp} to={to} replace={replace} />
}

interface IError {
  title: string
  detail?: string
  children: React.ReactNode
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

export interface IRequestError {
  status: number
  requestID: string | null
}

export const RequestError = (
  status: number,
  requestID: string | null = null
) => ({
  status,
  requestID,
})

export function HandleRequestError(props: IRequestError) {
  const { t } = useTranslation('errors')
  const { requestID, status } = props
  const location = useLocation()

  if (status === 401 || status === 403) return <Redirect to="/login" />

  const reportUrl = !requestID
    ? 'https://airtable.com/shrdg6IwqtKmNMfkL'
    : 'https://airtable.com/shrdg6IwqtKmNMfkL?prefill_X-Request-ID=' + requestID

  return (
    <Error title={t(`code.${status}`)}>
      {props.status === 500 || props.status === 503 || props.status === 400 ? (
        <ErrorButton href={reportUrl} target="_blank">
          {t('report')}
        </ErrorButton>
      ) : location?.pathname !== '/' ? (
        <ErrorLink to="/">{t('returnHome')}</ErrorLink>
      ) : (
        <Link to="/" component={ErrorButton}>
          {t('refreshPage')}
        </Link>
      )}
    </Error>
  )
}

export default Error
