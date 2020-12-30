import { Box, Button, Typography } from '@material-ui/core'
import { fail } from 'components/ErrorProvider'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { getBaan, getLogo } from '../../../local/BaanInfo'
import { pendingStyles } from './styles/pendingStyles'
import {
  getAllRequestCount,
  postBaanChange,
  ReqInfo,
} from './utils/requestToApi'

interface Props {
  currentBaan: number
  preferBaan: number
  round: number
}

const requestType = (currentBaan: number, preferBaan: number) => {
  if (currentBaan === 0) return 'joinBaan'
  // currently homeless
  else if (preferBaan === 0) return 'leaveBaan'
  // not homeless and request to leave baan
  else return 'changeBaan'
  // currentBaan not equal to preferBaan
}

function Pending(props: Props) {
  const { currentBaan, preferBaan, round } = props
  const { t, i18n } = useTranslation('profile')
  const baanInfo = getBaan(preferBaan === 0 ? currentBaan : preferBaan)
  const baanLogo = getLogo(preferBaan === 0 ? currentBaan : preferBaan)
  const [reqCount, setReqCount] = useState(0)
  const [reqPercent, setReqPercent] = useState(0)
  const styleProps = {
    baanNameColor: preferBaan === 0 ? '#D34949' : '#F2C94C',
    requestColor:
      reqPercent < 80 ? '#44AD53' : reqPercent <= 100 ? '#F2C94C' : '#D34949',
  }
  const classes = pendingStyles(styleProps)

  const cancel = useCallback(async () => {
    try {
      await postBaanChange(null)
      window.location.reload()
    } catch (e) {
      fail(e)
    }
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getAllRequestCount()
        const reqInfo = res.data.find((item: ReqInfo) => {
          return item.baanID === (preferBaan === 0 ? currentBaan : preferBaan)
        })
        if (reqInfo) {
          setReqCount(reqInfo.requestCount)
          setReqPercent(
            (reqInfo.requestCount * 100) /
              (reqInfo.capacity - reqInfo.memberCount)
          )
        }
      } catch (e) {
        fail(e)
      }
    }
    fetchData()
  }, [props, currentBaan, preferBaan])

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>
        {t('roundcnt', { count: round }) +
          t(requestType(currentBaan, preferBaan))}
      </Typography>
      <Box className={classes.container}>
        <Box className={classes.content}>
          <Box display="flex" alignItems="center" flexGrow="2">
            <img src={baanLogo} className={classes.logo} alt="logo" />
            <Box textAlign="left">
              <Typography className={classes.baanName}>
                {i18n.language.startsWith('en')
                  ? baanInfo['name-en']
                  : baanInfo['name-th']}
              </Typography>
              <Typography className={classes.request}>
                {t('request')}
                <span>{reqCount}</span>
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
                to="/baan"
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
