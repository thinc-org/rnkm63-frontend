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
import Error500 from '../../common/Error500'
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
  const [error500, setError500] = useState(false)
  const [errorRequestID, setErrorRequestID] = useState('')
  const { t } = useTranslation('form')
  const style = indexStyle()
  const history = useHistory()

  const confirm = React.useCallback(
    (value) => {
      if (userData!.isImgWrong && imageBlob === 0) {
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
      userData!.data === null ||
      userData!.data.nickname !== data.nickname
    if (imageBlob !== 0) {
      const resPolicy = await getPolicyStorage()
      const resUpload = await uploadImageToStorage(imageBlob, resPolicy.data)
    }
    const res = await postUserData(data, edit)
    if (res.status === 200 || res.status === 201) history.push('/form/complete')
    if (res.status === 401) history.push('/login')
    if (res.status === 500) {
      setConfirmOpen(false)
      setError500(true)
      return
    }
  }, [data, history])

  const closeDialog = React.useCallback(() => {
    setConfirmOpen(false)
  }, [setConfirmOpen])

  useEffect(() => {
    async function fetchData() {
      const res = await getProfile()
      if (res.status === 401) history.push('/login')
      if (res.status === 500) {
        setError500(true)
        return
      }

      setUserData(res.data)
      if (!res.data.data) {
        return
      }

      const resImgUrl = await getImageURL()
      setPreImage('https://storage.googleapis.com/' + resImgUrl.data)
    }
    fetchData()
  }, [])

  if (error500) {
    return <Error500 requestID={errorRequestID} />
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
                setImageRequired={setImageRequired}
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
