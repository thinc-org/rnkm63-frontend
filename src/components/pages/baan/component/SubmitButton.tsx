import { Button } from '@material-ui/core'
import { fail } from 'components/ErrorProvider'
import { createBrowserHistory } from 'history'
import React from 'react'
import { useTranslation } from 'react-i18next'

import useStyles from '../style/cardDialogStyle'
import { postRequestBaan } from '../utils/apiService'

interface ISubmitButton {
  color: string
  disabled: boolean
  ID: number
}

const SubmitButton = React.memo(function FormDialog(props: ISubmitButton) {
  const classes = useStyles()
  const { t } = useTranslation('selectbaan')
  const { color, disabled, ID } = props
  const history = createBrowserHistory({
    forceRefresh: true,
  })

  const sendToProfile = async () => {
    try {
      await postRequestBaan(ID)
      history.push('/')
    } catch (err) {
      fail(err)
    }
  }

  return (
    <Button
      className={classes.button_select_card}
      variant="contained"
      disabled={disabled}
      onClick={sendToProfile}
      color="primary"
      style={{ color: color }}
    >
      {t('select')}
    </Button>
  )
})

export default SubmitButton
