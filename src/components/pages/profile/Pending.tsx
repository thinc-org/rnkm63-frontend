import { Box, Button, Typography } from '@material-ui/core'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { getBaan, getLogo } from '../../../local/BaanInfo'
import { pendingStyles } from './styles/pendingStyles'
function Pending(props: {
  currentBaan: number
  preferBaan: number
  round: number
}) {
  const { currentBaan, preferBaan, round } = props
  const { t, i18n } = useTranslation('profile')
  const BaanInfo = getBaan(preferBaan === 0 ? currentBaan : preferBaan)
  const BaanLogo = getLogo(preferBaan === 0 ? currentBaan : preferBaan)
  const request = 100 //get data
  const styleProps = {
    baanNameColor: preferBaan === 0 ? 'Red' : 'Yellow',
    requestColor: 'Green', //change later
  }
  const classes = pendingStyles(styleProps)

  const cancel = useCallback(() => {
    //post user/requestBaanChange
  }, [])
  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>
        {t('roundcnt', { count: round }) +
          (currentBaan === 0
            ? t('joinBaan')
            : preferBaan === 0
            ? t('leaveBaan')
            : t('changeBaan'))}
      </Typography>
      <Box className={classes.container}>
        <Box className={classes.content}>
          <Box display="flex" alignItems="center" flexGrow="2">
            <img src={BaanLogo} className={classes.logo} alt="logo"></img>
            <Box textAlign="left">
              <Typography className={classes.baanName}>
                {i18n.language.startsWith('en')
                  ? BaanInfo['name-en']
                  : BaanInfo['name-th']}
              </Typography>
              <Typography className={classes.request}>
                {t('request')}
                <span>{request}</span>
              </Typography>
            </Box>
          </Box>
          <Box className={classes.buttonContainer}>
            <Button
              className={classes.button + ' ' + classes.cancel}
              onClick={cancel}
            >
              {t('cancel')}
            </Button>
            {preferBaan !== 0 && (
              <Button
                component={Link}
                to="/selectbaan"
                className={classes.button + ' ' + classes.change}
              >
                {t('change')}
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default Pending
