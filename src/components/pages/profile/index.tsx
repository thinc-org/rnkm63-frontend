import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countdown from './Countdown'
import Pics from './pics.png'
import { Box, Typography } from '@material-ui/core'
import { getBaan } from './BaanInfo'
import { profileStyles } from './styles/profileStyles'
import { useTranslation } from 'react-i18next'

const fetchUserData = async () => {
  return axios
    .get('')
    .then(({ data }) => {
      return data
    })
    .catch((err) => {
      return err
    })
}

function Profile(props: any) {
  const defaultUser = {
    data: {
      nickname: 'ก้อย สุธิดา',
      picURL: '',
    },
    faculty: {
      name_en: 'Faculty of engineering',
      name_th: 'คณะวิศวกรรมศาสตร์',
    },
    currentBaanId: 5,
    isTransfer: false,
  }

  const [userInfo, setUserInfo] = useState<any>(defaultUser)
  const classes = profileStyles()
  const { t, i18n } = useTranslation('profile')

  /*useEffect(() => {
    fetchUserData().then((userData) => {
      setUserInfo(userData);
    });
  })*/

  return (
    <body className={classes.profile}>
      <Box className={classes.image}>
        <img
          className={classes.imageSize}
          src={Pics}
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
              ? userInfo.faculty.name_en
              : userInfo.faculty.name_th}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2" className={classes.title}>
            {t('Baan')}
          </Typography>
          <Typography variant="h3" className={classes.valueDetails}>
            {i18n.language.startsWith('en')
              ? getBaan(userInfo.currentBaanId)['name-en']
              : getBaan(userInfo.currentBaanId)['name-th']}
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
