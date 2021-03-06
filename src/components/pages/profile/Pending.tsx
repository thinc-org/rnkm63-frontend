import { Box, Button, Typography } from '@material-ui/core'
import SkeletonImage from 'components/common/SkeletonImage'
import { fail } from 'components/ErrorProvider'
import { SubmitContext } from 'contexts/SubmitContext'
import { getBaan, getLogo } from 'local/BaanInfo'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

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
  const [reqColor, setReqColor] = useState('Green')
  const styleProps = {
    baanNameColor: preferBaan === 0 ? 'Red' : 'Yellow',
    requestColor: reqColor,
  }
  const classes = pendingStyles(styleProps)
  const { setSubmit } = useContext(SubmitContext)
  const cancel = useCallback(async () => {
    try {
      setSubmit(true)
      await postBaanChange(null)
      window.location.reload()
    } catch (e) {
      fail(e)
    }
  }, [setSubmit])

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getAllRequestCount()
        const reqInfo = res.data.find((item: ReqInfo) => {
          return item.baanID === (preferBaan === 0 ? currentBaan : preferBaan)
        })
        if (reqInfo) {
          setReqCount(reqInfo.requestCount)
          const seat = reqInfo.capacity - reqInfo.memberCount
          setReqColor(
            reqInfo.requestCount < (80 / 100) * seat
              ? 'Green'
              : reqInfo.requestCount <= seat
              ? 'Yellow'
              : 'Red'
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
            <SkeletonImage src={baanLogo} className={classes.logo} alt="logo" />
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
