import { Button } from 'components/common'
import { fail } from 'components/ErrorProvider'
import { createBrowserHistory } from 'history'
import React from 'react'
import { useTranslation } from 'react-i18next'

import useStyles from '../style/cardDialogStyle'
import { postRequestBaan } from '../utils/apiService'

interface ISubmitButton {
  disabled: boolean
  ID: number
}

const SubmitButton = React.memo(function FormDialog(props: ISubmitButton) {
  const { t } = useTranslation('selectbaan')
  const { disabled, ID } = props
  const classes = useStyles()
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
      disabled={disabled}
      onClick={sendToProfile}
      className={classes.submitButton}
    >
      {t('select')}
    </Button>
  )
})

export default SubmitButton
