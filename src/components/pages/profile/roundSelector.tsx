import { Box, Button } from '@material-ui/core'
import { fail } from 'components/ErrorProvider'
import { SubmitContext } from 'contexts/SubmitContext'
import React, { useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { roundStyles } from './styles/roundSelectorStyles'
import { postBaanChange } from './utils/requestToApi'
interface Props {
  isBaanExist: number
}
function RoundSelector(props: Props) {
  const { t } = useTranslation('profile')
  const classes = roundStyles()
  const { setSubmit } = useContext(SubmitContext)
  const leave = useCallback(async () => {
    try {
      setSubmit(true)
      await postBaanChange(0)
      window.location.reload()
    } catch (e) {
      fail(e)
    }
  }, [setSubmit])

  if (props.isBaanExist) {
    return (
      // if user has baan
      <Box>
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
      // if user doesn't have baan
      <Box>
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
