import { Box, Chip, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { AssignmentLog } from '../../../controllers/GetHistory'
import indexStyle from './indexStyle'

type Props = {
  data: Array<AssignmentLog> | null
  phase: number
}

function HistoryList({ data, phase }: Props) {
  let { t } = useTranslation(['schedule', 'baan'])
  const style = indexStyle()

  function getBaanWithLang(baan_num: number): string {
    return t('baan:'.concat(JSON.stringify(baan_num)))
  }

  function GetAction(history: AssignmentLog) {
    // no request
    if (history.preferBaan === null) {
      return (
        <Grid item>
          <Typography className={style.noRequest}>{t('no_request')}</Typography>
        </Grid>
      )
    }

    //  joined
    if (history.fromBaan === 0 && history.preferBaan === history.assignedBaan) {
      return (
        <>
          <Grid item>
            <Typography className={style.successAction}>
              {t('joined')}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={style.historyBaan}>
              {getBaanWithLang(history.assignedBaan)}
            </Typography>
          </Grid>
        </>
      )
    }

    // could not join
    if (history.fromBaan === 0 && history.preferBaan !== history.assignedBaan) {
      return (
        <Grid item>
          <Grid container>
            <Grid item>
              <Typography className={style.warningAction}>
                {t('could_not_join')}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={style.historyBaan}>
                {getBaanWithLang(history.preferBaan ?? -1)}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Typography className={style.warningAction}>
                {t('instead_join')}
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={style.historyBaan}>
                {getBaanWithLang(history.assignedBaan)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      )
    }

    // left
    if (history.fromBaan > 0 && history.preferBaan === 0) {
      return (
        <>
          <Grid item>
            <Typography className={style.successAction}>{t('left')}</Typography>
          </Grid>
          <Grid item>
            <Typography className={style.historyBaan}>
              {getBaanWithLang(history.fromBaan)}
            </Typography>
          </Grid>
        </>
      )
    }

    // moved to
    if (history.fromBaan > 0 && history.preferBaan === history.assignedBaan) {
      return (
        <>
          <Grid item>
            <Typography className={style.successAction}>
              {t('moved_to')}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={style.historyBaan}>
              {getBaanWithLang(history.assignedBaan)}
            </Typography>
          </Grid>
        </>
      )
    }

    // could not move to
    if (history.fromBaan > 0 && history.preferBaan !== history.assignedBaan) {
      return (
        <>
          <Grid item>
            <Typography className={style.failAction}>
              {t('could_not_moved_to')}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={style.historyBaan}>
              {getBaanWithLang(history.preferBaan ?? -1)}
            </Typography>
          </Grid>
        </>
      )
    }
  }

  // phase 1 with no data
  if (phase === 1) {
    return (
      <Grid item>
        <Typography>{t('no_assignment_history')}</Typography>
      </Grid>
    )
  }

  const List = data
    ? data.map((history: AssignmentLog, index: number) => {
        return (
          <Grid className={style.historyLine} container key={index}>
            <Grid item>
              <Chip size="small" className={style.orderBox} label={index + 1} />
            </Grid>
            {GetAction(history)}
          </Grid>
        )
      })
    : null
  return <Box>{List}</Box>
}

export { HistoryList }
