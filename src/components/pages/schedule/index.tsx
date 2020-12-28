import { Card, Grid, Typography } from '@material-ui/core'
import { fail } from 'components/ErrorProvider'
import React from 'react'
import { useTranslation } from 'react-i18next'
import useSWR from 'swr'

import { GetHistory } from '../../../controllers/GetHistory'
import Loading from '../../common/Loading'
import { HistoryList } from './HistoryList'
import indexStyle from './indexStyle'
import { ScheduleTable } from './ScheduleTable'

function SchedulePage() {
  const { t } = useTranslation('schedule')
  const style = indexStyle()

  const { data, error } = useSWR('/assignment/getHistory', GetHistory)
  if (error) return fail(error)
  if (!data) return <Loading />
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
          <HistoryList data={data} />
        </Card>
      </Grid>
    </Grid>
  )
}

export default SchedulePage
