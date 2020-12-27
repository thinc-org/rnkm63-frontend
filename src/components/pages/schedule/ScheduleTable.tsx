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
import { scheduleData } from './ScheduleData'

function ScheduleTable() {
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
              {t('table_round_title')}
            </TableCell>
            <TableCell className={style.tableText} align="center">
              {t('table_date_title')}
            </TableCell>
            <TableCell className={style.tableText} align="center">
              {t('table_time_title')}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scheduleData.map((act, index: number) => {
            return (
              <TableRow key={index}>
                <TableCell className={style.tableText} align="center">
                  {act.round}
                </TableCell>
                <TableCell className={style.tableText} align="center">
                  {act.date} {t('jan')}
                </TableCell>
                <TableCell className={style.tableText} align="center">
                  {act.start} - {act.end}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export { ScheduleTable }
