import { Box, Typography } from '@material-ui/core'
import React from 'react'
import Countdown from 'react-countdown'
import { useTranslation } from 'react-i18next'

import { countdownStyles } from './styles/countdownStyles'

interface Props {
  timeLeft: string
  roundCount: boolean
  processing: boolean
}
export const CountdownTimer = (props: Props) => {
  const classes = countdownStyles()
  const { t } = useTranslation('profile')

  if (!props.roundCount) {
    // Countdown timer at start
    return (
      <Countdown
        date={props.timeLeft}
        onComplete={() => window.location.reload(false)}
        renderer={(prop) => (
          <Box>
            <Typography variant="h3" className={classes.oldCountdownDetail}>
              {t('countdownDetail')}
            </Typography>
            <Typography variant="h1" className={classes.countdownTimer}>
              {prop.days} {t('Days', { count: prop.days })} &nbsp;
              {prop.hours} {t('Hours', { count: prop.hours })} &nbsp;
              {prop.minutes} {t('Minutes', { count: prop.minutes })} &nbsp;
              {prop.seconds} {t('Seconds', { count: prop.seconds })}
            </Typography>
          </Box>
        )}
      />
    )
  }

  if (!props.processing) {
    return (
      <Countdown
        date={props.timeLeft}
        onComplete={() => window.location.reload(false)}
        renderer={(prop) => (
          <Box>
            <Typography variant="h3" className={classes.countdownDetail}>
              {t('timeLeft')}
              {prop.days} {t('Days', { count: prop.days })} &nbsp;
              {prop.hours} {t('Hours', { count: prop.hours })} &nbsp;
              {prop.minutes} {t('Minutes', { count: prop.minutes })} &nbsp;
              {prop.seconds} {t('Seconds', { count: prop.seconds })}
            </Typography>
          </Box>
        )}
      />
    )
  } else {
    return (
      <Countdown
        date={props.timeLeft}
        onComplete={() => window.location.reload(false)}
        renderer={(prop) => (
          <Box>
            <Typography variant="h3" className={classes.countdownDetail}>
              {t('baanAnnounce')}
              {prop.minutes} {t('Minutes', { count: prop.minutes })} &nbsp;
              {prop.seconds} {t('Seconds', { count: prop.seconds })}
            </Typography>
          </Box>
        )}
      />
    )
  }
}

export default CountdownTimer
