import React from 'react'
import { Typography, Box, Chip, Grid } from '@material-ui/core'
import indexStyle from './indexStyle'
import { useTranslation } from 'react-i18next'
import { getBaan } from '../profile/BaanInfo'
import { History } from '../../../controllers/GetHistory'

type Props = {
  data: Array<History> | null
}

function ToNumber(input: number | null): number {
  if (typeof input == 'number') {
    return input
  } else {
    return -1
  }
}

function HistoryList({ data }: Props) {
  const { t, i18n } = useTranslation('schedule')
  const style = indexStyle()
  let order = 0

  function GetAction(history: History) {
    if (ToNumber(history.fromBaan) === 0) {
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
                {
                  getBaan(ToNumber(history.assignedBaan))[
                    'name-' + i18n.language
                  ]
                }
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
                  {
                    getBaan(ToNumber(history.preferBaan))[
                      'name-' + i18n.language
                    ]
                  }
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
                  {
                    getBaan(ToNumber(history.assignedBaan))[
                      'name-' + i18n.language
                    ]
                  }
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        )
      }
    } else if (ToNumber(history.fromBaan) > 0) {
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
                  {getBaan(ToNumber(history.fromBaan))['name-' + i18n.language]}
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
                  {
                    getBaan(ToNumber(history.assignedBaan))[
                      'name-' + i18n.language
                    ]
                  }
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
                {getBaan(ToNumber(history.preferBaan))['name-' + i18n.language]}
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

  const List = data ? (
    data.map((history: History) => {
      order += 1
      return (
        <Grid className={style.historyLine} container key={order}>
          <Grid item>
            <Chip size="small" className={style.orderBox} label={order} />
          </Grid>
          {GetAction(history)}
        </Grid>
      )
    })
  ) : (
    <></>
  )
  return <Box>{List}</Box>
}

export { HistoryList }
