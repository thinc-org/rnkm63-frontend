import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  countdownDetail: {
    fontSize: '34px',
    marginTop: '77px',
    marginBottom: '47px',
    lineHeight: '22px',
  },
  countdownTimer: {
    fontSize: '48px',
    margin: '0px 0px',
    lineHeight: '28px',
    fontWeight: 'bold',
  },
  '@media screen and (max-width: 720px)': {
    countdownDetail: {
      fontSize: '14px',
      lineHeight: '28px',
      marginTop: '53px',
      marginBottom: '9px',
    },
    countdownTimer: {
      fontSize: '18px',
      lineHeight: '28px',
    },
  },
  '@media screen and (max-width: 320px)': {},
})

export const Countdown = (props: any) => {
  const classes = useStyles()

  const { t, i18n } = useTranslation('profile')
  const endTime = new Date('2020-12-20').valueOf()
  const time = new Date().valueOf() + 7 * 1000 * 60 * 60
  const timeLeft = (endTime - time) / 1000
  const { secs = timeLeft } = props

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

  return (
    <div>
      <h3 className={classes.countdownDetail}>{t('countdownDetail')}</h3>
      <h1 className={classes.countdownTimer}>
        {days} {t('Days')} &nbsp;
        {hours} {t('Hours')} &nbsp;
        {minutes} {t('Minutes')} &nbsp;
        {seconds} {t('Seconds')}
      </h1>
    </div>
  )
  /*function secondsToTime(secs: number)  {
        let days = Math.floor(secs / (60*60*24));

        let d_of_hours = secs % (60*60*24);
        let hours = Math.floor(d_of_hours / (60*60));

        let d_of_minutes = secs % (60*60);
        let minutes= Math.floor(d_of_minutes / 60);

        let d_of_seconds = d_of_minutes % 60;
        let seconds = Math.ceil(d_of_seconds);

        let obj = {
            "d": (secs <= 0 ? 0 : days),
            "h": (secs <= 0 ? 0 : days),
            "m": (secs <= 0 ? 0 : days),
            "s": (secs <= 0 ? 0 : days),
        }

    return obj;
    }*/
}

export default Countdown
