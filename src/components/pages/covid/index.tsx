import { Box, makeStyles, Paper, Typography } from '@material-ui/core'
import { LinkButton } from 'components/common'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  content: {
    whiteSpace: 'pre-wrap',
  },
})

function Covid() {
  const classes = useStyles()
  const { t } = useTranslation('covid')
  return (
    <Box flexDirection="column" alignItems="stretch" textAlign="center">
      <Typography variant="h2">{t('title')}</Typography>
      <Paper elevation={3}>
        <Box padding="2rem">
          <Typography variant="body1" className={classes.content}>
            {t('content')}
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
