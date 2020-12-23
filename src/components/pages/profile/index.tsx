import { Box, Typography } from '@material-ui/core'
import { HandleRequestError, RequestError } from 'components/common/Error'
import Loading from 'components/common/Loading'
import { UserContext } from 'contexts/UserContext'
import { getBaan } from 'local/BaanInfo'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Redirect } from 'react-router-dom'

import Countdown from './Countdown'
import Pending from './Pending'
import RoundSelector from './roundSelector'
import { profileStyles } from './styles/profileStyles'

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

  if (!isUserLoaded) return <Loading />
  else if (userLoadError) return <HandleRequestError {...userLoadError} />
  else if (!userInfo) return <HandleRequestError {...RequestError(500, null)} />
  else if (!userInfo.data || !userInfo.isConfirm) return <Redirect to="/form" />
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
        {userInfo?.preferBaan === null ? (
          <RoundSelector isBaanExist={userInfo?.currentBaan} />
        ) : (
          <Pending
            round={1}
            currentBaan={userInfo?.currentBaan}
            preferBaan={userInfo?.preferBaan!}
          />
        )}
        <Countdown />
      </body>
    )
}

export default Profile
