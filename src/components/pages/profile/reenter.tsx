import { Typography } from '@material-ui/core'
import { LinkButton } from 'components/common'
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
      <Link
        to="/form"
        color="primary"
        className={classes.select}
        component={LinkButton}
      >
        {t('enterActButton')}
      </Link>
    </>
  )
}

export default Reenter
