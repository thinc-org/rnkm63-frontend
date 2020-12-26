import { Box, Typography } from '@material-ui/core'
import {
  HandleRequestError,
  IRequestError,
  RequestError,
} from 'components/common/Error'
import Loading from 'components/common/Loading'
import { UserContext } from 'contexts/UserContext'
import { getBaan } from 'local/BaanInfo'
import { getEndTime, getStartTime } from 'local/RoundInfo'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Redirect } from 'react-router-dom'

import BaanRender from './BaanRender'
import Countdown from './Countdown'
import { profileStyles } from './styles/profileStyles'
import { getRound } from './utils/requestToApi'

function Profile() {
  const {
    user: userInfo,
    isLoaded: isUserLoaded,
    error: userLoadError,
  } = React.useContext(UserContext)
  const userPic = userInfo?.data?.imgURL ?? ''
  const baanEng = getBaan(userInfo?.currentBaan ?? 0)['name-en']
  const baanThai = getBaan(userInfo?.currentBaan ?? 0)['name-th']
  const classes = profileStyles()
  const { t, i18n } = useTranslation('profile')
  const [error, setError] = useState<IRequestError | null>(null)
  const [round, setRound] = useState(0)
  useEffect(() => {
    async function fetchData() {
      const res = await getRound()
      if (res.status < 200 || res.status >= 300) {
        setError(RequestError(res.status, res.headers['x-request-id']))
      } else {
        setRound(res.data)
      }
    }
    fetchData()
  }, [])

  const endOfSelect = new Date('2021-01-13 12:00:00').valueOf()
  const currentTime = new Date().valueOf()
  const endTime = new Date(getEndTime(round)).valueOf()
  let secs = (endTime - currentTime) / 1000
  if (secs < 0) {
    const nextStartTime = new Date(getStartTime(round + 1)).valueOf()
    secs = (currentTime - nextStartTime) / 1000
  }

  if (!isUserLoaded) return <Loading />
  else if (userLoadError) return <HandleRequestError {...userLoadError} />
  else if (!userInfo) return <HandleRequestError {...RequestError(500, null)} />
  else if (!userInfo.data || !userInfo.isConfirm) return <Redirect to="/form" />
  else if (error !== null) return <HandleRequestError {...error} />
  else
    return (
      <body className={classes.profile}>
        <Box className={classes.image}>
          <img
            className={classes.imageSize}
            src={userPic}
            alt={userInfo?.data?.nickname ?? '-'}
          />
        </Box>
        <Box className={classes.value}>
          <Box>
            <Typography variant="h2" className={classes.title}>
              {t('Name')}
            </Typography>
            <Typography variant="h3" className={classes.valueDetails}>
              {userInfo?.data?.nickname ?? '-'}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h2" className={classes.title}>
              {t('Faculty')}
            </Typography>
            <Typography variant="h3" className={classes.valueDetails}>
              {i18n.language.startsWith('en')
                ? (userInfo?.data?.facultyEn ?? '-').replace('Faculty of', '')
                : (userInfo?.data?.facultyTh ?? '-').replace('คณะ', '')}
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
              {userInfo?.isTransfer ? t('baanWarning') : ''}
            </Typography>
          </Box>
        </Box>
        {currentTime !== endOfSelect && (
          <>
            <BaanRender
              round={round}
              secs={secs}
              preferBaan={userInfo?.preferBaan}
              currentBaan={userInfo?.currentBaan}
              setError={setError}
            />
            <Countdown timeLeft={secs} roundCount={true} />
          </>
        )}
      </body>
    )
}

export default Profile
