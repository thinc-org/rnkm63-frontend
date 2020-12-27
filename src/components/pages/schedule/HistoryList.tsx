import { Box, Chip, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { ActivityHistory } from '../../../controllers/GetHistory'
import { getBaan } from '../../../local/BaanInfo'
import indexStyle from './indexStyle'

type Props = {
  data: Array<ActivityHistory> | null
}

function HistoryList({ data }: Props) {
  const { t, i18n } = useTranslation('schedule')
  const style = indexStyle()

  function getBaanWithLang(baan_num: number): string {
    return i18n.language === 'en'
      ? getBaan(baan_num)['name-en']
      : getBaan(baan_num)['name-th']
  }

  function GetAction(history: ActivityHistory) {
    // not a request
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
            <Typography className={style.historyBann}>
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
              <Typography className={style.historyBann}>
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
              <Typography className={style.historyBann}>
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
            <Typography className={style.historyBann}>
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
            <Typography className={style.historyBann}>
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
            <Typography className={style.historyBann}>
              {getBaanWithLang(history.preferBaan ?? -1)}
            </Typography>
          </Grid>
        </>
      )
    }
  }

  const List = data
    ? data.map((history: ActivityHistory, index: number) => {
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
