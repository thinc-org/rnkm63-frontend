import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { pendingStyles } from './styles/pendingStyles'

function BaanPending() {
  const { t } = useTranslation('profile')
  const classes = pendingStyles()

  return <Box className={classes.container}></Box>
}

export default BaanPending
