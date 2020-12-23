import { Box, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { statusColorStyle } from './style/statusColorStyle'

const listStatus = [
  {
    type: 'statusGreen',
    backgroundColor: '#44AD53',
  },
  {
    type: 'statusYellow',
    backgroundColor: '#F2C94C',
  },
  {
    type: 'statusRed',
    backgroundColor: '#D34949',
  },
]

function StatusColor() {
  const style = statusColorStyle()
  const { t } = useTranslation('selectbaan')

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-evenly"
      className={style.container}
    >
      {listStatus.map((val, idx) => (
        <Box display="flex" alignItems="center" key={idx}>
          <Paper
            className={style.paperStatus}
            style={{ backgroundColor: val.backgroundColor }}
          />
          <Typography className={style.statusText}>{t(val.type)}</Typography>
        </Box>
      ))}
    </Box>
  )
}

export default StatusColor
