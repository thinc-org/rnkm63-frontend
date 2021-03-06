import { Box, Typography } from '@material-ui/core'
import LoadingOnPage from 'components/common/LoadingOnPage'
import SkeletonImage from 'components/common/SkeletonImage'
import { fail } from 'components/ErrorProvider'
import { SubmitContext } from 'contexts/SubmitContext'
import { UserContext } from 'contexts/UserContext'
import { getBaan } from 'local/BaanInfo'
import getFaculty from 'local/facultyInfo'
import { getEndTime, getLocalRound, getStartTime } from 'local/RoundInfo'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import BaanRender from './BaanRender'
import CountdownTimer from './Countdown'
import Reenter from './reenter'
import { profileStyles } from './styles/profileStyles'

function Profile() {
  const [isSubmit, setSubmit] = useState(false)
  const { user: userInfo, error } = React.useContext(UserContext)
  const { t, i18n } = useTranslation('profile')
  if (!userInfo) return fail(error)
  const userPic = userInfo?.data?.imgURL ?? ''
  const baanEng = getBaan(userInfo?.currentBaan ?? 0)['name-en']
  const baanThai = getBaan(userInfo?.currentBaan ?? 0)['name-th']
  const globalRound = userInfo.roundCount
  const round = getLocalRound()
  const classes = profileStyles()
  const currentTime = new Date().valueOf()

  const endTimeString = getEndTime(round)
  const nextStartTime = getStartTime(round + 1)
  const endTime = new Date(endTimeString).valueOf()
  let secs = endTime - currentTime
  let process = secs < 0 ? true : false

  if (round > globalRound) {
    // localRound is more than globalRound, something wrong
    // still processing or user changed device time
    return fail({
      title: 'Still processing, please wait...',
      requestID: 'localRoundMoreThanGlobalRound:' + error?.requestID,
    })
  }

  return (
    <SubmitContext.Provider value={{ setSubmit }}>
      <body className={classes.profile}>
        <Box className={classes.image}>
          <SkeletonImage
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
                ? getFaculty(userInfo.facultyID).name_en
                : getFaculty(userInfo.facultyID).name_th}
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
        {userInfo?.currentBaan === -1 ? (
          //non-participant, display reenter button
          <Reenter />
        ) : userInfo.phaseCount === 1 ? (
          //phase 1, display countdown
          <CountdownTimer
            timeLeft={getStartTime(1)}
            roundCount={false}
            processing={false}
          />
        ) : (
          userInfo.phaseCount === 2 && (
            // phase 2
            <>
              <BaanRender
                round={round}
                secs={secs}
                preferBaan={userInfo.preferBaan}
                currentBaan={userInfo.currentBaan}
              />
              <CountdownTimer
                timeLeft={secs < 0 ? nextStartTime : endTimeString}
                roundCount={true}
                processing={process}
              />
            </>
          )
        )}
        <LoadingOnPage onProcess={isSubmit} />
      </body>
    </SubmitContext.Provider>
  )
}

export default Profile
