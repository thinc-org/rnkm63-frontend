import { Box, makeStyles, Paper, Typography } from '@material-ui/core'
import { LinkButton } from 'components/common'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  content: {
    textAlign: 'start',
    '& li': {
      listStyle: 'none',
      display: 'table',
      '&:before': {
        display: 'table-cell',
        paddingEnd: '0.5em',
        content: 'counters(item, ".")". "',
        counterIncrement: 'item',
      },
      '& p': {
        display: 'inline',
      },
    },
    '& ul': {
      counterReset: 'item',
    },
  },
})

function Covid() {
  const classes = useStyles()
  const { t } = useTranslation('covid')
  const Content = React.useMemo(
    () => React.lazy(t('content', { returnObjects: true })),
    [t]
  )
  return (
    <Box flexDirection="column" alignItems="stretch" textAlign="center">
      <Typography variant="h2">{t('title')}</Typography>
      <Paper elevation={3}>
        <Box padding="2rem">
          <Typography className={classes.content}>
            <Content />
          </Typography>
        </Box>
      </Paper>
      <Link to="/" component={LinkButton}>
        {t('continue')} &rarr;
      </Link>
    </Box>
  )
}

export default Covid
