import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countdown from './Countdown'
import { Box, Typography } from '@material-ui/core'
import { getBaan } from './BaanInfo'
import { profileStyles } from './styles/profileStyles'
import { useTranslation } from 'react-i18next'

const fetchUserData = async () => {
  return axios
    .get('https://dev.rubnongkaomai.com/api/user/mockUser?mode=5')
    .then(({ data }) => {
      console.log(JSON.stringify(data))
      return data
    })
    .catch((err) => {
      console.log(err)
      return err
    })
}

function Profile(props: any) {
  const defaultUser = {
    data: {
      nickname: '-',
      imgURL: '',
    },
    faculty: {
      name_en: '-',
      name_th: '-',
    },
    currentBaan: 0,
    isTransfer: true,
  }

  const [userInfo, setUserInfo] = useState(defaultUser)
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
  }, [])

  return (
    <body className={classes.profile}>
      <Box className={classes.image}>
        <img
          className={classes.imageSize}
          src={userInfo.data.imgURL}
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
