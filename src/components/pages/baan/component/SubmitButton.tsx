import { Button } from '@material-ui/core'
import { IRequestError, RequestError } from 'components/common/Error'
import { createBrowserHistory } from 'history'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { useStyles } from '../style/cardDialogStyle'
import { postRequestBaan } from '../utils/apiService'

interface ISubmitButton {
  color: string
  disabled: boolean
  ID: number
  setError: React.Dispatch<React.SetStateAction<IRequestError | null>>
}

const SubmitButton = React.memo(function FormDialog(props: ISubmitButton) {
  const classes = useStyles()
  const { t } = useTranslation('selectbaan')
  const { color, disabled, ID, setError } = props
  const history = createBrowserHistory({
    forceRefresh: true,
  })

  const sendToProfile = async (id: number) => {
    const res = await postRequestBaan(id)
    if (res.status < 200 || res.status >= 300) {
      setError(RequestError(res.status, res.headers['x-request-id']))
    } else {
      history.push('/')
    }
  }

  return (
    <Button
      className={classes.button_select_card}
      variant="contained"
      disabled={disabled}
      onClick={() => sendToProfile(ID)}
      color="primary"
      style={{ color: color }}
    >
      {t('select')}
    </Button>
  )
})

export default SubmitButton
