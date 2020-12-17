import React, { useState } from 'react'
import Countdown from './Countdown'
import Pics from './pics.png'
import { Box, Typography } from '@material-ui/core'
import { getBaan } from './BaanInfo'
import { profileStyles } from './styles/profileStyles'
import { useTranslation } from 'react-i18next'

function Profile(props: any) {
  const [userInfo, setUserInfo] = useState<any>([])

  const classes = profileStyles()
  const { t, i18n } = useTranslation('profile')

  return (
    <body className={classes.profile}>
      <Box className={classes.image}>
        <img className={classes.imageSize} src={Pics} alt="user profile pic" />
      </Box>
      <Box className={classes.value}>
        <Box>
          <Typography variant="h2" className={classes.title}>
            {t('Name')}
          </Typography>
          <Typography variant="h3" className={classes.valueDetails}>
            นางสาว ก้อย นุ้ย
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2" className={classes.title}>
            {t('Faculty')}
          </Typography>
          <Typography variant="h3" className={classes.valueDetails}>
            {i18n.language.startsWith('en')
              ? 'Faculty of engineering'
              : 'คณะวิศวกรรมศาสตร์'}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2" className={classes.title}>
            {t('Baan')}
          </Typography>
          <Typography variant="h3" className={classes.valueDetails}>
            {i18n.language.startsWith('en')
              ? getBaan(20)['name-en']
              : getBaan(20)['name-th']}
          </Typography>
          <Typography variant="h4" className={classes.baanWarning}>
            {1 + 1 === 2 ? t('baanWarning') : ''}
          </Typography>
        </Box>
      </Box>
      <Countdown />
    </body>
  )
}

export default Profile
