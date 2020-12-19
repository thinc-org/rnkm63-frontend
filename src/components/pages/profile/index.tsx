import React, { useState, useEffect } from 'react'
import axios, { AxiosPromise } from 'axios'
import Countdown from './Countdown'
import { Box, Typography } from '@material-ui/core'
import { getBaan } from './BaanInfo'
import { profileStyles } from './styles/profileStyles'
import { useTranslation } from 'react-i18next'
import { API_URL } from '../../../utils'
import { HandleRequestError } from '../../common/Error'
import { useHistory } from 'react-router-dom'
import { UserContext, IUserData, IUser } from '../../../contexts/UserContext'
import Loading from '../../common/Loading'

const config = {
  headers: { 'No-CSRF': true },
  withCredentials: true,
  baseURL: API_URL,
}
const apiClient = axios.create(config)

const getProfile = function (): AxiosPromise<any> {
  return apiClient.get('/user/profile').catch((err) => err.response)
}

function Profile() {
  const {
    user: userInfo,
    isLoaded: isUserLoaded,
    isError: isUserLoadError,
    error: userLoadError,
  } = React.useContext(UserContext)
  const userPic = userInfo?.data?.imgURL ?? ''
  const baanEng = getBaan(userInfo?.currentBaan ?? 0)['name-en']
  const baanThai = getBaan(userInfo?.currentBaan ?? 0)['name-th']
  const classes = profileStyles()
  const { t, i18n } = useTranslation('profile')
  const history = useHistory()

  if (userLoadError) return <HandleRequestError {...userLoadError} />
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
                ? userInfo?.data?.facultyEn ?? '-'
                : userInfo?.data?.facultyTh ?? '-'}
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
        <Countdown />
      </body>
    )
}

export default Profile
