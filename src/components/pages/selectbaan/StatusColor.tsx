import { Box, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { statusColorStyle } from './style/statusColorStyle'

const listStatus = [
  {
    text: 'ยังไม่เกินจำนวนรับ',
    backgroundColor: '#44AD53',
  },
  {
    text: 'กำลังเกินจำนวนรับ',
    backgroundColor: '#F2C94C',
  },
  {
    text: 'เกินจำนวนรับแล้ว',
    backgroundColor: '#D34949',
  },
]

function StatusColor() {
  const style = statusColorStyle()

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-evenly"
      className={style.container}
    >
      {listStatus.map((val) => (
        <Box display="flex" alignItems="center">
          <Paper
            className={style.paperStatus}
            style={{ backgroundColor: val.backgroundColor }}
          />
          <Typography className={style.statusText}>{val.text}</Typography>
        </Box>
      ))}
    </Box>
  )
}

export default StatusColor
