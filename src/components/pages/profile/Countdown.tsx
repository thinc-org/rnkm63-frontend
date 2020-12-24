import { Box, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { countdownStyles } from './styles/countdownStyles'

export const Countdown = (props: any) => {
  const classes = countdownStyles()

  const endTime = new Date('2020-12-27').valueOf()
  const time = new Date().valueOf() - 5 * 1000 * 60 * 60
  const timeLeft = (endTime - time) / 1000
  const { t } = useTranslation('profile')
  const secs = props.timeLeft ?? timeLeft

  const [days, setDays] = useState(Math.floor(secs / (60 * 60 * 24)))
  const [hours, setHours] = useState(
    Math.floor((secs % (60 * 60 * 24)) / (60 * 60))
  )
  const [minutes, setMinutes] = useState(Math.floor((secs % (60 * 60)) / 60))
  const [seconds, setSeconds] = useState(Math.ceil((secs % (60 * 60)) % 60))

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }

      if (seconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            if (days === 0) {
              clearInterval(myInterval)
            } else {
              setDays(days - 1)
              setHours(23)
              setMinutes(59)
              setSeconds(59)
            }
          } else {
            setHours(hours - 1)
            setMinutes(59)
            setSeconds(59)
          }
        } else {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })
  if (props.roundCount) {
    return (
      <Box>
        <Typography variant="h3" className={classes.countdownDetail}>
          {t('timeLeft')}
          {days} {t('Days', { count: days })} &nbsp;
          {hours} {t('Hours', { count: hours })} &nbsp;
          {minutes} {t('Minutes', { count: minutes })} &nbsp;
          {seconds} {t('Seconds', { count: seconds })}
        </Typography>
      </Box>
    )
  } else {
    return (
      <Box>
        <Typography variant="h3" className={classes.countdownDetail}>
          {t('countdownDetail')}
        </Typography>
        <Typography variant="h1" className={classes.countdownTimer}>
          {days} {t('Days', { count: days })} &nbsp;
          {hours} {t('Hours', { count: hours })} &nbsp;
          {minutes} {t('Minutes', { count: minutes })} &nbsp;
          {seconds} {t('Seconds', { count: seconds })}
        </Typography>
      </Box>
    )
  }
}

export default Countdown
