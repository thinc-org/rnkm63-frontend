import { Box, makeStyles, Typography } from '@material-ui/core'
import { Theme } from '@material-ui/core'
import { Button, LinkButton } from 'components/common'
import { IFailure } from 'components/ErrorProvider'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import SadThincIcon from '../shell/misc/SadThincIcon'

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
    alignItems: 'stretch',
  },
}))

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
      <Box className={classes.buttonsContainer}>{children}</Box>
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
        <LinkButton href={reportUrl} target="_blank">
          {t('report')}
        </LinkButton>
      )}
      {showBack && (
        <Link to="/" component={Button}>
          {t('return')}
        </Link>
      )}
      {children}
    </ErrorDisplay>
  )
}
