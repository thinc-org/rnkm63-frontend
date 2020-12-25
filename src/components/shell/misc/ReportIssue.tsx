import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    textTransform: 'none',
  },
})

const ReportIssue = () => {
  const classes = useStyles()
  const { t } = useTranslation('shell')

  return (
    <Button
      href="https://airtable.com/shrdg6IwqtKmNMfkL"
      target="__blank__"
      className={classes.root}
    >
      {t('report')}
    </Button>
  )
}

export default ReportIssue
