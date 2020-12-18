import React, { useState, useEffect } from 'react'
import { Button, Box, Typography } from '@material-ui/core'
import Image from './Image'
import FormInput from './FormInput'
import FormDialog from './utils/component/formDialogComponent'
import { indexStyle } from './style'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { Formik, Form as FormikForm } from 'formik'
import {
  registerSchema,
  formInitialValues,
  IFormDataRequest,
} from './utils/registerSchema'
import HandleError from '../../common/HandleError'
import {
  postUserData,
  getProfile,
  uploadImageToStorage,
  getPolicyStorage,
  getImageURL,
} from './utils/requestToApi'

function Form() {
  const [imageBlob, setImageBlob] = useState(0 as any)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [userData, setUserData] = useState(null as IFormDataRequest | null)
  const [preImage, setPreImage] = useState('')
  const [imageRequired, setImageRequired] = useState(false)
  const [data, setData] = useState(formInitialValues)
  const [error, setError] = useState(0)
  const [errorRequestID, setErrorRequestID] = useState('')
  const { t } = useTranslation('form')
  const style = indexStyle()
  const history = useHistory()

  const confirm = React.useCallback(
    (value) => {
      if ((!userData!.data || userData!.isImgWrong) && imageBlob === 0) {
        setImageRequired(true)
        return
      }
      setData(value)
      setConfirmOpen(true)
    },
    [setConfirmOpen, imageBlob, userData]
  )

  const submit = React.useCallback(async () => {
    const edit =
      imageBlob !== 0 ||
      userData!.isNameWrong ||
      !userData!.data ||
      userData!.data.nickname !== data.nickname
    if (imageBlob !== 0) {
      const resPolicy = await getPolicyStorage()
      const resUpload = await uploadImageToStorage(imageBlob, resPolicy.data)
      if (resUpload.status === 400) {
        setError(resUpload.status)
        return
      }
    }
    const res = await postUserData(data, edit)
    if (res.status === 200 || res.status === 201) history.push('/form/complete')
    else {
      setError(res.status)
      setErrorRequestID(res.headers['x-request-id'])
    }
  }, [data, history, imageBlob, userData])

  const closeDialog = React.useCallback(() => {
    setConfirmOpen(false)
  }, [setConfirmOpen])

  useEffect(() => {
    async function fetchData() {
      const res = await getProfile()
      if (res.status !== 200) {
        setError(res.status)
        setErrorRequestID(res.headers['x-request-id'])
      }

      setUserData(res.data)
      if (!res.data.data) {
        return
      }

      const resImgUrl = await getImageURL()
      setPreImage('https://storage.googleapis.com/' + resImgUrl.data)
    }
    fetchData()
  }, [history])

  if (error !== 0) {
    return <HandleError requestID={errorRequestID} status={error} />
  }

  if (!userData) {
    return null
  }

  if (userData!.isConfirm) {
    history.push('/')
  }

  return (
    <Box className={style.container}>
      <Formik
        initialValues={!userData.data ? formInitialValues : userData.data}
        onSubmit={confirm}
        validationSchema={registerSchema}
      >
        <FormikForm>
          <Typography className={style.title}>
            {!userData.data ? t('register') : t('editProfile')}
          </Typography>
          <Box className={style.content}>
            <Box className={style.image}>
              <Image
                setImageBlob={setImageBlob}
                preImage={preImage}
                imageRequired={imageRequired}
                isImgWrong={userData.isImgWrong || !userData.data}
              />
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
