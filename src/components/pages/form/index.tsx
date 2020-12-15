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
import { useFormik } from 'formik'
import { registerSchema } from './utils/registerSchema'
function Form() {
  const [imageBlob, setImageBlob] = useState('')
  const [confirmOpen, setConfirmOpen] = useState(false)

  const { t } = useTranslation('form')
  const style = indexStyle()
  const history = useHistory()
  let userData = {}

  const complete = React.useCallback(() => {
    history.push('/form/complete')
  }, [history])

  const confirm = React.useCallback(
    //validate image here
    (value) => {
      userData = value
      setConfirmOpen(true)
    },
    [setConfirmOpen, userData]
  )

  const submit = React.useCallback(() => {
    //fetch userData here
    complete()
  }, [])

  const closeDialog = React.useCallback(() => {
    setConfirmOpen(false)
  }, [setConfirmOpen])

  const formik = useFormik({
    initialValues: {
      prefix: '',
      realname: '',
      surname: '',
      nickname: '',
      religion: '',
      tel: '',
      facebook: '',
      lineID: '',
      emergencyTel: '',
      emergencyConnection: '',
      disease: '',
      allergyMedicine: '',
      usedMedicine: '',
      foodRestriction: '',
      disability: '',
    },
    validationSchema: registerSchema,
    onSubmit: confirm,
  })

  return (
    <Box className={style.container}>
      <form onSubmit={formik.handleSubmit}>
        <Typography className={style.title}>{t('title')}</Typography>
        <Box className={style.content}>
          <Box className={style.image}>
            <Image imageBlob={imageBlob} setImageBlob={setImageBlob} />
          </Box>
          <Box className={style.formInput}>
            <FormInput formik={formik} />
          </Box>
        </Box>
        <Box>
          <Button classes={{ root: style.submitButton }} type="submit">
            {t('submit')}
          </Button>
          <p className={style.submitNote}>{t('submitNote')}</p>
        </Box>
      </form>

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
