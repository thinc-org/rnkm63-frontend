import React from 'react'
import { useTranslation } from 'react-i18next'

import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  pos: {
    display: 'inline',
    marginRight: '1.8rem',
  },
})

const ReportIssue = () => {
  const classes = useStyles()
  const { t } = useTranslation('drawer')
  return (
    <Button
      href="https://airtable.com/shrdg6IwqtKmNMfkL"
      className={classes.pos}
    >
      {t('Report')}
    </Button>
  )
}

export default ReportIssue
