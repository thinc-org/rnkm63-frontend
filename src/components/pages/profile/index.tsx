import { Box, Typography } from '@material-ui/core'
import { fail } from 'components/ErrorProvider'
import { UserContext } from 'contexts/UserContext'
import { getBaan } from 'local/BaanInfo'
import { getEndTime, getStartTime } from 'local/RoundInfo'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import BaanRender from './BaanRender'
import Countdown from './Countdown'
import Reenter from './reenter'
import { profileStyles } from './styles/profileStyles'
import { getRound } from './utils/requestToApi'

function Profile() {
  const { user: userInfo } = React.useContext(UserContext)
  const userPic = userInfo?.data?.imgURL ?? ''
  const baanEng = getBaan(userInfo?.currentBaan ?? 0)['name-en']
  const baanThai = getBaan(userInfo?.currentBaan ?? 0)['name-th']
  const classes = profileStyles()
  const { t, i18n } = useTranslation('profile')
  const [round, setRound] = useState(0)
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getRound()
        setRound(res.data)
      } catch (e) {
        fail(e)
      }
    }
    fetchData()
  }, [])

  const startSelect = new Date('2021-01-09 12:00:00').valueOf()
  const endOfSelect = new Date('2021-01-13 12:00:00').valueOf()
  const currentTime = new Date().valueOf()
  const endTime = new Date(getEndTime(round)).valueOf()
  let secs = (endTime - currentTime) / 1000
  if (secs < 0) {
    const nextStartTime = new Date(getStartTime(round + 1)).valueOf()
    secs = (currentTime - nextStartTime) / 1000
  }

  if (!userInfo) return fail({})
  return (
    <body className={classes.profile}>
      <Box className={classes.image}>
        <img
          className={classes.imageSize}
          src={userPic}
          alt={userInfo.data?.nickname ?? '-'}
        />
      </Box>
      <Box className={classes.value}>
        <Box>
          <Typography variant="h2" className={classes.title}>
            {t('Name')}
          </Typography>
          <Typography variant="h3" className={classes.valueDetails}>
            {userInfo.data?.nickname ?? '-'}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2" className={classes.title}>
            {t('Faculty')}
          </Typography>
          <Typography variant="h3" className={classes.valueDetails}>
            {i18n.language.startsWith('en')
              ? (userInfo.data?.facultyEn ?? '-').replace('Faculty of', '')
              : (userInfo.data?.facultyTh ?? '-').replace('คณะ', '')}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2" className={classes.title}>
            {t('Baan')}
          </Typography>
          <Typography variant="h3" className={classes.valueDetails}>
            {i18n.language.startsWith('en') ? baanEng : baanThai}
          </Typography>
          <Typography variant="h4" className={classes.baanWarning}>
            {userInfo.isTransfer ? t('baanWarning') : ''}
          </Typography>
        </Box>
      </Box>
      {currentTime < startSelect && userInfo?.currentBaan === -1 ? (
        <Reenter />
      ) : currentTime < startSelect ? (
        <Countdown
          timeLeft={(startSelect - currentTime) / 1000}
          roundCount={false}
        />
      ) : (
        ''
      )}
      {currentTime < endOfSelect && startSelect < currentTime && (
        <>
          <BaanRender
            round={round}
            secs={secs}
            preferBaan={userInfo.preferBaan}
            currentBaan={userInfo.currentBaan}
          />
          <Countdown timeLeft={secs} roundCount={true} />
        </>
      )}
    </body>
  )
}

export default Profile
