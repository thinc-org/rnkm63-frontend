import { Box, Chip, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { History } from '../../../controllers/GetHistory'
import { getBaan } from '../../../local/BaanInfo'
import indexStyle from './indexStyle'

type Props = {
  data: Array<History> | null
}

function HistoryList({ data }: Props) {
  const { t } = useTranslation('schedule')
  const style = indexStyle()

  function getBaanWithLang(baan_num: number): string {
    return getBaan(baan_num)['name-th']
  }

  function GetAction(history: History) {
    if (history.fromBaan === 0) {
      if (history.preferBaan === history.assignedBaan) {
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
      } else {
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
    } else if (history.fromBaan > 0) {
      if (history.preferBaan === history.assignedBaan) {
        if (history.preferBaan === 0) {
          return (
            <>
              <Grid item>
                <Typography className={style.successAction}>
                  {t('left')}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={style.historyBann}>
                  {getBaanWithLang(history.fromBaan)}
                </Typography>
              </Grid>
            </>
          )
        } else {
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
      } else {
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
    } else {
      return (
        <Grid item>
          <Typography className={style.noRequest}>{t('no_request')}</Typography>
        </Grid>
      )
    }
  }

  const List = data
    ? data.map((history: History, index: number) => {
        return (
          <Grid className={style.historyLine} container key={index}>
            <Grid item>
              <Chip size="small" className={style.orderBox} label={index} />
            </Grid>
            {GetAction(history)}
          </Grid>
        )
      })
    : null
  return <Box>{List}</Box>
}

export { HistoryList }
