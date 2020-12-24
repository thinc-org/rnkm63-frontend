import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { roundStyles } from './styles/roundSelectorStyles'

function RoundSelector(props: any) {
  const { t } = useTranslation('profile')
  const classes = roundStyles()
  if (props.isBaanExist) {
    return (
      <Box>
        <Typography variant="h2" className={classes.round}>
          {t('round')} 1
        </Typography>
        <Button href="/" variant="contained" className={classes.exit}>
          {t('exitHouse')}
        </Button>
        <Button href="/select" variant="contained" className={classes.change}>
          {t('changeHouse')}
        </Button>
      </Box>
    )
  } else {
    return (
      <Box>
        <Typography variant="h2" className={classes.round}>
          {t('round')} 1
        </Typography>
        <Button
          href="/select"
          variant="contained"
          className={`${classes.change} ${classes.select}`}
        >
          {t('selectHouse')}
        </Button>
      </Box>
    )
  }
}

export default RoundSelector
