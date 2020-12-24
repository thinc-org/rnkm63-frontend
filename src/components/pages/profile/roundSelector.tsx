import { Box, Button, Typography } from '@material-ui/core'
import { IRequestError, RequestError } from 'components/common/Error'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { roundStyles } from './styles/roundSelectorStyles'
import { postBaanChange } from './utils/requestToApi'
interface Props {
  isBaanExist: number
  round: number
  setError: React.Dispatch<React.SetStateAction<IRequestError | null>>
}
function RoundSelector(props: Props) {
  const { t } = useTranslation('profile')
  const classes = roundStyles()
  const leave = useCallback(async () => {
    const res = await postBaanChange(0)
    if (res.status < 200 || res.status >= 300) {
      props.setError(RequestError(res.status, res.headers['x-request-id']))
    } else {
      window.location.reload()
    }
  }, [props])
  if (props.isBaanExist) {
    return (
      <Box>
        <Typography variant="h2" className={classes.round}>
          {t('round') + ' ' + props.round}
        </Typography>
        <Button
          variant="contained"
          className={classes.exit}
          onClick={() => leave()}
        >
          {t('exitHouse')}
        </Button>
        <Button
          variant="contained"
          className={classes.change}
          component={Link}
          to="/baan"
        >
          {t('changeHouse')}
        </Button>
      </Box>
    )
  } else {
    return (
      <Box>
        <Typography variant="h2" className={classes.round}>
          {t('round') + ' ' + props.round}
        </Typography>
        <Button
          variant="contained"
          className={`${classes.change} ${classes.select}`}
          component={Link}
          to="/baan"
        >
          {t('selectHouse')}
        </Button>
      </Box>
    )
  }
}

export default RoundSelector
