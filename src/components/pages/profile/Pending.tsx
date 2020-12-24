import { Box, Button, Typography } from '@material-ui/core'
import { IRequestError, RequestError } from 'components/common/Error'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { getBaan, getLogo } from '../../../local/BaanInfo'
import { pendingStyles } from './styles/pendingStyles'
import { getAllRequestCount, postBaanChange } from './utils/requestToApi'
interface Props {
  currentBaan: number
  preferBaan: number
  round: number
  setError: React.Dispatch<React.SetStateAction<IRequestError | null>>
}
function Pending(props: Props) {
  const { currentBaan, preferBaan, round } = props
  const { t, i18n } = useTranslation('profile')
  const BaanInfo = getBaan(preferBaan === 0 ? currentBaan : preferBaan)
  const BaanLogo = getLogo(preferBaan === 0 ? currentBaan : preferBaan)
  const [reqCount, setReqCount] = useState(0)
  const styleProps = {
    baanNameColor: preferBaan === 0 ? 'Red' : 'Yellow',
    requestColor: 'Green', //change later
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
        const reqInfo = res.data.find(
          (item: { baanID: number; requestCount: number }) => {
            return item.baanID === (preferBaan === 0 ? currentBaan : preferBaan)
          }
        )
        if (reqInfo) {
          setReqCount(reqInfo.requestCount)
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
            <img src={BaanLogo} className={classes.logo} alt="logo"></img>
            <Box textAlign="left">
              <Typography className={classes.baanName}>
                {i18n.language.startsWith('en')
                  ? BaanInfo['name-en']
                  : BaanInfo['name-th']}
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
