import React, { useState, useEffect } from 'react'
import axios, { AxiosPromise } from 'axios'
import Countdown from './Countdown'
import { Box, Typography } from '@material-ui/core'
import { getBaan } from './BaanInfo'
import { profileStyles } from './styles/profileStyles'
import { useTranslation } from 'react-i18next'
import { API_URL } from '../../../utils'
import HandleError from '../../common/HandleError'
import { useHistory } from 'react-router-dom'

interface User {
  data: {
    nickname: string
    facultyEn: string
    facultyTh: string
  }
  currentBaan: number
  isTransfer: boolean
}
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
  const defaultUser: User = {
    data: {
      nickname: '-',
      facultyEn: '-',
      facultyTh: '-',
    },
    currentBaan: 0,
    isTransfer: true,
  }

  const defaultProfilePicURL = ''

  const [userInfo, setUserInfo] = useState<User>(defaultUser)
  const [userPic, setUserPic] = useState(defaultProfilePicURL)
  const baanEng = getBaan(userInfo['currentBaan'])['name-en'] || '-'
  const baanThai = getBaan(userInfo['currentBaan'])['name-th'] || '-'
  const classes = profileStyles()
  const [error, setError] = useState(0)
  const [errorRequestID, setErrorRequestID] = useState('')
  const { t, i18n } = useTranslation('profile')
  const history = useHistory()

  useEffect(() => {
    async function fetchData() {
      const res = await getProfile()
      if (res.status !== 200) {
        setError(res.status)
        setErrorRequestID(res.headers['x-request-id'])
        return
      }
      if (!res.data.data || res.data.isConfirm === false) {
        return history.push('/form')
      }
      setUserInfo(res.data)
      setUserPic(res.data.data.imgURL)
    }
    fetchData()
  }, [history])
  if (error !== 0) {
    return <HandleError requestID={errorRequestID} status={error} />
  }

  if (!userInfo) {
    return null
  }

  return (
    <body className={classes.profile}>
      <Box className={classes.image}>
        <img
          className={classes.imageSize}
          src={userPic}
          alt={userInfo.data.nickname}
        />
      </Box>
      <Box className={classes.value}>
        <Box>
          <Typography variant="h2" className={classes.title}>
            {t('Name')}
          </Typography>
          <Typography variant="h3" className={classes.valueDetails}>
            {userInfo.data.nickname}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2" className={classes.title}>
            {t('Faculty')}
          </Typography>
          <Typography variant="h3" className={classes.valueDetails}>
            {i18n.language.startsWith('en')
              ? userInfo.data.facultyEn
              : userInfo.data.facultyTh}
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
      <Countdown />
    </body>
  )
}

export default Profile
