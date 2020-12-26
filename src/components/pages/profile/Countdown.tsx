import { Box, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { countdownStyles } from './styles/countdownStyles'

interface Props {
  timeLeft: number
  roundCount: boolean
}
export const Countdown = (props: Props) => {
  const classes = countdownStyles()

  const { t } = useTranslation('profile')

  const secs = props.timeLeft < 0 ? -props.timeLeft : props.timeLeft
  //timeLeft is negative if its between round interval

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
  if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
    window.location.reload(false) // reload when the timer or countdown is ended
  }
  if (props.timeLeft >= 0) {
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
          {t('baanAnnounce')}
          {minutes} {t('Minutes', { count: minutes })} &nbsp;
          {seconds} {t('Seconds', { count: seconds })}
        </Typography>
      </Box>
    )
  }
}

export default Countdown
