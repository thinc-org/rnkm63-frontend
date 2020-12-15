import React from 'react'
import { useState } from 'react'
import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@material-ui/core'
import Image from './Image'
import FormInput from './FormInput'
import { indexStyle } from './style'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'

function Form() {
  const [imageBlob, setImageBlob] = useState('')
  const [userData, setUserData] = useState({
    name: 'Genshin',
    surname: 'Impact',
  })
  const [confirmOpen, setConfirmOpen] = useState(false)

  const { t, i18n } = useTranslation('form')
  const style = indexStyle({ lang: i18n.language })
  const history = useHistory()
  const complete = React.useCallback(() => {
    history.push('/form/complete')
  }, [history])

  const validate = React.useCallback(() => {
    //validate here
    return true
  }, [])

  const confirm = React.useCallback(() => {
    if (validate()) setConfirmOpen(true)
  }, [setConfirmOpen, validate])

  const submit = React.useCallback(() => {
    //fetch data here
    complete()
  }, [])

  const closeDialog = React.useCallback(() => {
    setConfirmOpen(false)
  }, [setConfirmOpen])

  return (
    <Box className={style.container}>
      <Typography className={style.title}>{t('title')}</Typography>
      <Box className={style.content}>
        <Box className={style.image}>
          <Image imageBlob={imageBlob} setImageBlob={setImageBlob} />
        </Box>
        <Box className={style.formInput}>
          <FormInput userData={userData} setUserData={setUserData} />
        </Box>
      </Box>
      <Box>
        <Button classes={{ root: style.submitButton }} onClick={confirm}>
          {t('submit')}
        </Button>
        <p className={style.submitNote}>{t('submitNote')}</p>
      </Box>

      <Dialog
        open={confirmOpen}
        onClose={closeDialog}
        PaperProps={{
          classes: { root: style.dialog },
        }}
        style={{ backdropFilter: 'blur(8px)' }}
      >
        <DialogTitle classes={{ root: style.dialogTitle }}>
          <Typography className={style.dialogTitle}>
            {t('confirmDialogTitle')}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography className={style.dialogContent}>
            {t('confirmDescription')}
          </Typography>
        </DialogContent>
        <DialogActions classes={{ root: style.dialogAction }}>
          <Button
            onClick={closeDialog}
            classes={{ root: `${style.button} ${style.cancel}` }}
          >
            {t('cancel')}
          </Button>
          <Button
            onClick={submit}
            classes={{ root: `${style.button} ${style.confirm}` }}
          >
            {t('confirm')}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
export default Form
