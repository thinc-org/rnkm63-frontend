import { Box } from '@material-ui/core'
import { Button, LinkButton } from 'components/common'
import { fail } from 'components/ErrorProvider'
import React, { useCallback } from 'react'
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
  const leave = useCallback(async () => {
    try {
      await postBaanChange(0)
      window.location.reload()
    } catch (e) {
      fail(e)
    }
  }, [])

  if (props.isBaanExist) {
    return (
      // if user has baan
      <Box>
        <Button color="secondary" onClick={() => leave()}>
          {t('exitHouse')}
        </Button>
        <Link color="primary" component={LinkButton} to="/baan">
          {t('changeHouse')}
        </Link>
      </Box>
    )
  } else {
    return (
      // if user doesn't have baan
      <Box>
        <Link
          color="primary"
          className={classes.select}
          component={LinkButton}
          to="/baan"
        >
          {t('selectHouse')}
        </Link>
      </Box>
    )
  }
}

export default RoundSelector
