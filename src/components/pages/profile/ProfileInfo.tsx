import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { getBaan } from 'local/BaanInfo'
import { profileStyles } from './styles/profileStyles'
import { useTranslation } from 'react-i18next'
import { HandleRequestError, RequestError } from '../../common/Error'
import { Redirect } from 'react-router-dom'
import { UserContext } from '../../../contexts/UserContext'
import Loading from '../../common/Loading'

function ProfileInfo() {
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
      </body>
    )
}

export default ProfileInfo
