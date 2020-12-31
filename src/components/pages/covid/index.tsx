import { Box, makeStyles, Paper, Typography } from '@material-ui/core'
import { LinkButton } from 'components/common'
import React from 'react'
import { useTranslation } from 'react-i18next'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  content: {
    textAlign: 'start',
    '& li': {
      listStyle: 'none',
      '&:before': {
        content: 'counters(item, ".")". "',
        counterIncrement: 'item',
      },
      '&:marker': {
        color: 'red',
      },
    },
    '& ul': {
      counterReset: 'item',
    },
  },
})

function Covid() {
  const { t } = useTranslation('covid')
  return (
    <Box flexDirection="column" alignItems="stretch" textAlign="center">
      <Typography variant="h2">{t('title')}</Typography>
      <Paper elevation={3}>
        <Box padding="2rem">
          <Content />
        </Box>
      </Paper>
      <Link to="/" component={LinkButton}>
        {t('continue')} &rarr;
      </Link>
    </Box>
  )
}

function Content() {
  const { t } = useTranslation('covid')
  const classes = useStyles()
  return (
    <ReactMarkdown skipHtml={true} className={classes.content}>
      {t('content') ?? ''}
    </ReactMarkdown>
  )
}

export default Covid
