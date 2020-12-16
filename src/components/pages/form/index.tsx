import React, { useState } from 'react'
import { Button, Box, Typography } from '@material-ui/core'
import Image from './Image'
import FormInput from './FormInput'
import FormDialog from './utils/component/formDialogComponent'
import { indexStyle } from './style'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { Formik, Form as FormikForm } from 'formik'
import { registerSchema } from './utils/registerSchema'

const formInitialValues = {
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
}

function Form() {
  const [imageBlob, setImageBlob] = useState('')
  const [confirmOpen, setConfirmOpen] = useState(false)

  const [userData, setUserData] = useState(formInitialValues)

  const { t } = useTranslation('form')
  const style = indexStyle()
  const history = useHistory()

  const complete = React.useCallback(() => {
    history.push('/form/complete')
  }, [history])

  const confirm = React.useCallback(
    //validate image here
    (value) => {
      setUserData(value)
      setConfirmOpen(true)
    },
    [setConfirmOpen, userData, setUserData]
  )

  const submit = React.useCallback(() => {
    //fetch userData here
    console.log(userData)
    complete()
  }, [complete, userData])

  const closeDialog = React.useCallback(() => {
    setConfirmOpen(false)
  }, [setConfirmOpen])

  return (
    <Box className={style.container}>
      <Formik
        initialValues={formInitialValues}
        onSubmit={confirm}
        validationSchema={registerSchema}
      >
        <FormikForm>
          <Typography className={style.title}>{t('title')}</Typography>
          <Box className={style.content}>
            <Box className={style.image}>
              <Image imageBlob={imageBlob} setImageBlob={setImageBlob} />
            </Box>
            <Box className={style.formInput}>
              <FormInput />
            </Box>
          </Box>
          <Box>
            <Button classes={{ root: style.submitButton }} type="submit">
              {t('submit')}
            </Button>
            <Typography className={style.submitNote}>
              {t('submitNote')}
            </Typography>
          </Box>
        </FormikForm>
      </Formik>
      <FormDialog
        confirmOpen={confirmOpen}
        closeDialog={closeDialog}
        submit={submit}
      />
    </Box>
  )
}

export default Form
