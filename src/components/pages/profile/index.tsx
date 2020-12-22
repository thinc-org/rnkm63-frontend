import { Box, Typography } from '@material-ui/core'
import { HandleRequestError, RequestError } from 'components/common/Error'
import Loading from 'components/common/Loading'
import { UserContext } from 'contexts/UserContext'
import { getBaan } from 'local/BaanInfo'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Redirect } from 'react-router-dom'

import Countdown from './Countdown'
import ProfileInfo from './ProfileInfo'
import { profileStyles } from './styles/profileStyles'

function Profile() {
  return (
    <Box>
      <ProfileInfo />
      <Countdown timeLeft="100" />
    </Box>
  )
}

export default Profile
