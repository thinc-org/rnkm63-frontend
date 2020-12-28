import { Box, Button, RootRef, Typography } from '@material-ui/core'
import { indexStyle } from 'components/pages/form/style'
import { IUser, IUserData } from 'contexts/UserContext'
import {
  Form as FormikForm,
  Formik,
  validateYupSchema,
  yupToFormErrors,
} from 'formik'
import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'

import {
  formInitialValues,
  IFormData,
  registerSchema,
} from '../utils/registerSchema'
import FormInput from './FormInput'
import Image from './Image'

interface IFormUI {
  userData: IUser
  imageRequired: boolean
  imageBlob: Blob | number
  submitClick: boolean
  setSubmitClick: (param: boolean) => void
  setImageBlob: (blob: any) => void
  setImageRequired: (param: boolean) => void
  confirm: (value: IUserData) => void
  leaveActivity: () => void
}

function FormUI(props: IFormUI) {
  const {
    userData,
    imageBlob,
    imageRequired,
    submitClick,
    setSubmitClick,
    confirm,
    setImageBlob,
    setImageRequired,
    leaveActivity,
  } = props
  const { t } = useTranslation('form')
  const style = indexStyle()
  const imageRef = useRef<HTMLInputElement>(null)

  if (userData.isNameWrong && !!userData.data) {
    userData.data.nickname = ''
  }

  return (
    <Box className={style.container}>
      <Formik
        initialValues={userData?.data ?? formInitialValues}
        onSubmit={confirm}
        validate={(values: IUserData) => {
          let imgFail = false
          if (
            (!userData?.data || userData?.isImgWrong) &&
            imageBlob === 0 &&
            submitClick
          ) {
            setImageRequired(true)
            imgFail = true
          }
          try {
            validateYupSchema<IFormData>(values, registerSchema, true)
          } catch (err) {
            const objErr = yupToFormErrors(err)
            if (imgFail && submitClick) {
              imageRef.current?.scrollIntoView()
            } else if (submitClick) {
              const firstErrorKey = Object.keys(objErr)[0]
              global.window.document.getElementsByName(firstErrorKey)[0].focus()
            }
            setSubmitClick(false)
            return objErr
          }
          if (imgFail) {
            imageRef.current?.scrollIntoView()
          }
          setSubmitClick(false)
          return
        }}
      >
        {(props) => (
          <FormikForm>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography className={style.title}>
                {!userData.data ? t('register') : t('editProfile')}
              </Typography>
              <Box className={style.leaveContainer}>
                {userData.data && userData.currentBaan !== -1 && (
                  <React.Fragment>
                    <Button
                      className={style.leaveEvent}
                      onClick={() => leaveActivity()}
                    >
                      {t('leaveButton')}
                    </Button>
                    <Typography className={style.leaveEventDescription}>
                      {t('leaveDescription')}
                    </Typography>
                  </React.Fragment>
                )}
              </Box>
            </Box>
            <Box className={style.content}>
              <RootRef rootRef={imageRef}>
                <Box className={style.image}>
                  <Image
                    setImageBlob={setImageBlob}
                    preImage={
                      userData.isImgWrong ? '' : userData.data?.imgURL ?? ''
                    }
                    imageRequired={imageRequired}
                    setImageRequired={setImageRequired}
                    isImgWrong={userData.isImgWrong || !userData.data}
                  />
                </Box>
              </RootRef>
              <Box>
                {userData.data && userData.currentBaan !== -1 && (
                  <Button
                    className={style.leaveMobile}
                    onClick={() => leaveActivity()}
                  >
                    {t('leaveButton')}
                  </Button>
                )}
              </Box>
              <Box className={style.formInput}>
                <FormInput />
              </Box>
            </Box>
            <Button
              classes={{ root: style.submitButton }}
              type="submit"
              onClick={() => {
                setSubmitClick(true)
                props.isSubmitting = true
              }}
            >
              {t('submit')}
            </Button>
            <Typography className={style.submitNote}>
              {t('submitNote')}
            </Typography>
          </FormikForm>
        )}
      </Formik>
    </Box>
  )
}

export default FormUI
