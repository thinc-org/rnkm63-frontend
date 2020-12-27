import React from 'react'
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core'
import indexStyle from './indexStyle'
import { useTranslation } from 'react-i18next'
import { scheduleData } from './ScheduleData'

function ScheduleTable() {
  const { t } = useTranslation('schedule')
  const style = indexStyle()
  let i = 0

  return (
    <TableContainer className={style.scheduleTable}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={style.tableText} align="center">
              {t('table_round_title')}
            </TableCell>
            <TableCell className={style.tableText} align="center">
              {t('table_date_title')}
            </TableCell>
            <TableCell className={style.tableText} align="center">
              {t('table_start_title')}
            </TableCell>
            <TableCell className={style.tableText} align="center">
              {t('table_end_title')}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scheduleData.map((act) => {
            i += 1
            return (
              <TableRow key={i}>
                <TableCell className={style.tableText} align="center">
                  {act.round}
                </TableCell>
                <TableCell className={style.tableText} align="center">
                  {act.date} {t('jan')}
                </TableCell>
                <TableCell className={style.tableText} align="center">
                  {act.start}
                </TableCell>
                <TableCell className={style.tableText} align="center">
                  {act.end}
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
