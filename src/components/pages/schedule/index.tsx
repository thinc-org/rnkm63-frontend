import React from 'react'
import { Typography, Card, Grid } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import indexStyle from './indexStyle'
import { HistoryList } from './HistoryList'
import { withSuspense } from '../../hoc'
import { ScheduleTable } from './ScheduleTable'
import { GetHistory } from '../../../controllers/GetHistory'

function SchedulePage() {
  const { t } = useTranslation('schedule')
  const style = indexStyle()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Typography className={style.scheduleTitle}>
          {t('schedule_title')}
        </Typography>
        <Card className={style.scheduleContainer}>
          <ScheduleTable />
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card className={style.historyContainer}>
          <Typography className={style.historyTitle}>
            {t('history_title')}
          </Typography>
        </Card>
      </Grid>
    </Grid>
  )
}

export default withSuspense(SchedulePage)
