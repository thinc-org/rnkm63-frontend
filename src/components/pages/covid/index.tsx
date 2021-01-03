import { Box, makeStyles, Paper, Theme, Typography } from '@material-ui/core'
import { LinkButton } from 'components/common'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: '1.25rem',
    [theme.breakpoints.up('sm')]: {
      padding: '2rem',
    },
  },
  title: {
    textAlign: 'center',
  },
  content: {
    textAlign: 'start',
    '& li': {
      '& p': {
        display: 'inline',
      },
      paddingTop: '0.25rem',
      paddingBottom: '0.25rem',
    },
    '& ul': {
      counterReset: 'item',
      paddingInlineStart: '1.5em',
      [theme.breakpoints.up('sm')]: {
        paddingInlineStart: '2em',
      },
    },
    '& > ul': {
      paddingInlineStart: '1em',
    },
  },
}))

function Covid() {
  const classes = useStyles()
  const { t } = useTranslation('covid')
  const Content = t('content', { returnObjects: true })
  return (
    <Box flexDirection="column" alignItems="stretch" textAlign="center">
      <Paper elevation={3}>
        <Box className={classes.container}>
          <Typography variant="h5" className={classes.title}>
            {t('title')}
          </Typography>
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
