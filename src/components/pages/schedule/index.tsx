import { Card, Grid, Typography } from '@material-ui/core'
import { Loading } from 'components/common'
import { fail } from 'components/ErrorProvider'
import { UserContext } from 'contexts/UserContext'
import React from 'react'
import { useTranslation } from 'react-i18next'
import useSWR from 'swr'

import { GetHistory } from '../../../controllers/GetHistory'
import { ActivityTable } from './ActivityTable'
import { HistoryList } from './HistoryList'
import indexStyle from './indexStyle'
import { ScheduleTable } from './ScheduleTable'

function SchedulePage() {
  const { t } = useTranslation('schedule')
  const style = indexStyle()
  const { user: userInfo, error: contextError } = React.useContext(UserContext)
  const { data, error } = useSWR(
    userInfo?.phaseCount !== 1 ? '/assignment/getHistory' : null,
    GetHistory
  )

  console.log(userInfo)
  if (contextError) return fail(contextError)
  if (error) return fail(error)

  if (userInfo?.phaseCount !== 1 && !data) return <Loading />
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Card className={style.scheduleContainer}>
          <ActivityTable />
        </Card>
        <Typography className={style.scheduleTitle}>
          {t('schedule_title')}
        </Typography>
        <Card className={style.scheduleContainer}>
          <ScheduleTable
            currentRound={userInfo?.roundCount ? userInfo.roundCount : -1}
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card className={style.historyContainer}>
          <Typography className={style.historyTitle}>
            {t('history_title')}
          </Typography>
          <HistoryList
            data={data ? data : null}
            phase={userInfo?.phaseCount ? userInfo.phaseCount : -1}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default SchedulePage
