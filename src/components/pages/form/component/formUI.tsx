import { Box, Button, RootRef, Typography } from '@material-ui/core'
import { indexStyle } from 'components/pages/form/style'
import { IUser, IUserData } from 'contexts/UserContext'
import { Form as FormikForm, Formik } from 'formik'
import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'

import { formInitialValues } from '../utils/registerSchema'
import { customValidation } from '../utils/validationHelper'
import FormInput from './FormInput'
import Image from './Image'

interface IFormUI {
  userData: IUser
  imageRequired: boolean
  imageBlob: Blob | number
  submitClick: boolean
  setSubmitClick: (param: boolean) => void
  setImageBlob: (blob: any) => void
  openLeaveDialog: () => void
  setImageRequired: (param: boolean) => void
  confirm: (value: IUserData) => void
}

const FormUI = React.memo(function FormUI(props: IFormUI) {
  const {
    userData,
    imageBlob,
    imageRequired,
    submitClick,
    setSubmitClick,
    confirm,
    setImageBlob,
    openLeaveDialog,
    setImageRequired,
  } = props
  const { t } = useTranslation('form')
  const style = indexStyle()
  const imageRef = useRef<HTMLInputElement>(null)

  if (userData.isNameWrong && !!userData.data) {
    userData.data.nickname = ''
  }

  const onSubmitClick = React.useCallback(() => {
    setSubmitClick(true)
  }, [setSubmitClick])

  return (
    <Box className={style.container}>
      <Formik
        initialValues={userData?.data ?? formInitialValues}
        onSubmit={confirm}
        validate={(values: IUserData) => {
          return customValidation(
            imageRef,
            submitClick,
            imageBlob,
            values,
            userData,
            setImageRequired,
            setSubmitClick
          )
        }}
      >
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
                    onClick={openLeaveDialog}
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
            <Box className={style.formInput}>
              <FormInput />
            </Box>
          </Box>
          <Box className={style.confirmContainer}>
            {userData.data && userData.currentBaan !== -1 && (
              <Button className={style.leaveMobile} onClick={openLeaveDialog}>
                {t('leaveButton')}
              </Button>
            )}
            <Button
              classes={{ root: style.submitButton }}
              type="submit"
              onClick={onSubmitClick}
            >
              {t('submit')}
            </Button>
          </Box>
        </FormikForm>
      </Formik>
    </Box>
  )
})

export default FormUI
