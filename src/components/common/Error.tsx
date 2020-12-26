import {
  Box,
  Button,
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  Typography,
} from '@material-ui/core'
import { Theme } from '@material-ui/core'
import { ButtonProps } from '@material-ui/core/Button'
import { IFailure } from 'components/ErrorProvider'
import theme from 'config/theme'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import SadThincIcon from '../shell/misc/SadThincIcon'
import LinkButton, { LinkButtonProps } from './LinkButton'

const greenButtonTheme = createMuiTheme({
  typography: {
    fontFamily: ['Rubik', 'Kanit', 'sans-serif'].join(','),
  },
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
    textAlign: 'center',
  },
  detailText: {
    fontSize: '1.5rem',
    fontWeight: 500,
    textAlign: 'center',
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
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
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

interface IErrorDisplay {
  title: string
  detail?: string
  children: React.ReactNode
}

export function ErrorDisplay({ title, detail, children }: IErrorDisplay) {
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

interface IFailureDisplay {
  failure: IFailure
  children?: React.ReactNode
  showReport?: boolean
  showBack?: boolean
}

export function FailureDisplay({
  failure,
  children,
  showReport = true,
  showBack = true,
}: IFailureDisplay) {
  const { t } = useTranslation('errors')

  const title =
    failure?.title ?? t([`codes.${failure.status}`, 'codes.unknown']) ?? ''
  const detail = failure?.detail ?? ''

  const reportUrl = !failure.requestID
    ? 'https://airtable.com/shrdg6IwqtKmNMfkL'
    : `https://airtable.com/shrdg6IwqtKmNMfkL?prefill_X-Request-ID=${failure.requestID}`

  return (
    <ErrorDisplay title={title} detail={detail}>
      {showReport && (
        <ErrorButton href={reportUrl} target="_blank">
          {t('report')}
        </ErrorButton>
      )}
      {showBack && (
        <Link to="/" component={ErrorButton}>
          {t('return')}
        </Link>
      )}
      {children}
    </ErrorDisplay>
  )
}
