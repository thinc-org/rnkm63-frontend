import { Box, Button, Typography } from '@material-ui/core'
import { IRequestError, RequestError } from 'components/common/Error'
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
  setError: React.Dispatch<React.SetStateAction<IRequestError | null>>
}
function Pending(props: Props) {
  const { currentBaan, preferBaan, round } = props
  const { t, i18n } = useTranslation('profile')
  const baanInfo = getBaan(preferBaan === 0 ? currentBaan : preferBaan)
  const baanLogo = getLogo(preferBaan === 0 ? currentBaan : preferBaan)
  const [reqCount, setReqCount] = useState(0)
  const [reqPercent, setReqPercent] = useState(0)
  const styleProps = {
    baanNameColor: preferBaan === 0 ? 'Red' : 'Yellow',
    requestColor:
      reqPercent < 80 ? 'Green' : reqPercent < 100 ? 'Yellow' : 'Red',
  }
  const classes = pendingStyles(styleProps)

  const cancel = useCallback(async () => {
    const res = await postBaanChange(null)
    if (res.status < 200 || res.status >= 300) {
      props.setError(RequestError(res.status, res.headers['x-request-id']))
    } else {
      window.location.reload()
    }
  }, [props])

  useEffect(() => {
    async function fetchData() {
      const res = await getAllRequestCount()
      if (res.status < 200 || res.status >= 300) {
        props.setError(RequestError(res.status, res.headers['x-request-id']))
      } else {
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
      }
    }
    fetchData()
  }, [props, currentBaan, preferBaan])

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
            <img src={baanLogo} className={classes.logo} alt="logo"></img>
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
