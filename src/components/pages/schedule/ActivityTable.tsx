import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'

import indexStyle from './indexStyle'
import { scheduleActivityData } from './ScheduleData'

function ActivityTable() {
  const { t } = useTranslation('schedule')
  const style = indexStyle()

  return (
    <TableContainer className={style.scheduleTable}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              padding="none"
              className={style.tableText}
              align="center"
            >
              {t('table_date_title')}
            </TableCell>
            <TableCell className={style.tableText} align="center">
              {t('table_time_title')}
            </TableCell>
            <TableCell className={style.tableText} align="center">
              {t('schedule_title')}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scheduleActivityData.map((act, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell className={style.tableText} align="center">
                  {act.date} {t(act.month)}
                </TableCell>
                <TableCell className={style.tableText} align="center">
                  {act.time} {act.time !== '-' ? t('time_unit') : ''}
                </TableCell>
                <TableCell className={style.tableText} align="left">
                  {t(act.activity)}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export { ActivityTable }
