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
  const Content = t('content', { returnObjects: true })
  return (
    <Box flexDirection="column" alignItems="stretch" textAlign="center">
      <Paper elevation={3}>
        <Box padding="2rem">
          <Typography variant="h4">{t('title')}</Typography>
          <Typography className={classes.content} component="div">
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
