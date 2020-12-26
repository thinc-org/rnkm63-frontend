import { Typography } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'

import Pending from './Pending'
import RoundSelector from './roundSelector'
import { profileStyles } from './styles/profileStyles'
interface Props {
  secs: number
  round: number
  preferBaan: number | null
  currentBaan: number
}
function BaanRender(props: Props) {
  const { t } = useTranslation('profile')
  const { secs, round, preferBaan, currentBaan } = props
  const classes = profileStyles()
  if (secs < 0) {
    // 15 minutes interval between round (secs is negative)
    return (
      <div>
        <Typography
          variant="h2"
          style={{ fontSize: '3rem', fontWeight: 500, marginTop: '5%' }}
        >
          {t('process')} {round}...
        </Typography>
      </div>
    )
  } else if (preferBaan === null) {
    // no prefer baan, A round selector is displayed
    return (
      <div>
        <Typography variant="h2" className={classes.round}>
          {t('round') + ' ' + round}
        </Typography>
        <RoundSelector isBaanExist={currentBaan ?? 0} />
      </div>
    )
  } else {
    return (
      // if the user have a prefer baan, a pending status is displayed
      <div>
        <Pending
          round={round}
          currentBaan={currentBaan ?? 0}
          preferBaan={preferBaan!}
        />
      </div>
    )
  }
}
export default BaanRender
