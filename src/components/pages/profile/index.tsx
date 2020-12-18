import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countdown from './Countdown'
import { Box, Typography } from '@material-ui/core'
import { getBaan } from './BaanInfo'
import { profileStyles } from './styles/profileStyles'
import { useTranslation } from 'react-i18next'
import { API_URL } from '../../../utils'

interface User {
  data: {
    nickname: string
  }
  faculty: {
    name_en: string
    name_th: string
  }
  currentBaan: number
  isTransfer: boolean
}

const fetchUserData = async () => {
  return axios
    .get(API_URL + '/user/profile', {
      headers: { 'No-CSRF': true },
      withCredentials: true,
    })
    .then(({ data }) => {
      return data
    })
    .catch((err) => {
      console.log(err)
      return err
    })
}

const fetchUserPic = async () => {
  return axios
    .get(API_URL + 'getUploadFileName', {
      headers: { 'No-CSRF': true },
      withCredentials: true,
    })
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.log(err)
      return err
    })
}

function Profile() {
  const defaultUser: User = {
    data: {
      nickname: '-',
    },
    faculty: {
      name_en: '-',
      name_th: '-',
    },
    currentBaan: 0,
    isTransfer: true,
  }

  const defaultProfilePicURL =
    'https://media.discordapp.net/attachments/780977351428931594/784451408275046460/ElL3lTKVkAA2CmN.png'

  const [userInfo, setUserInfo] = useState<User>(defaultUser)
  const [userPic, setUserPic] = useState(defaultProfilePicURL)
  const baanEng = getBaan(userInfo['currentBaan'])['name-en'] || '-'
  const baanThai = getBaan(userInfo['currentBaan'])['name-th'] || '-'
  const classes = profileStyles()
  const { t, i18n } = useTranslation('profile')

  useEffect(() => {
    fetchUserData()
      .then((userData) => {
        setUserInfo(userData)
      })
      .catch((err) => {
        setUserInfo(defaultUser)
      })
    /*fetchUserPic()
    .then((picURL) => {
      setUserPic(picURL)
    }).catch(err => {
      setUserPic(defaultProfilePicURL)
    })*/
  }, [])

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
            {i18n.language.startsWith('en') ? '-' : '-'}
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
