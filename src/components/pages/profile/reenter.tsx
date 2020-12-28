import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { roundStyles } from './styles/roundSelectorStyles'

function Reenter() {
  const { t } = useTranslation('profile')
  const classes = roundStyles()
  return (
    <>
      <Typography variant="h2" className={classes.round}>
        {t('enterAct')}
      </Typography>
      <Button
        variant="contained"
        className={`${classes.change} ${classes.select}`}
        component={Link}
        to="/form"
      >
        {t('enterActButton')}
      </Button>
    </>
  )
}

export default Reenter
