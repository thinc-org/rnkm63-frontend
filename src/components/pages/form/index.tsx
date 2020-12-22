import { Box, Button, RootRef, Typography } from '@material-ui/core'
import { HandleRequestError } from 'components/common/Error'
import { IRequestError, RequestError } from 'components/common/Error'
import Loading from 'components/common/Loading'
import { IUser, IUserData, UserContext } from 'contexts/UserContext'
import {
  Form as FormikForm,
  Formik,
  validateYupSchema,
  yupToFormErrors,
} from 'formik'
import { History, LocationState } from 'history'
import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Redirect } from 'react-router-dom'

import FormDialog from './component/formDialogComponent'
import FormInput from './FormInput'
import Image from './Image'
import { indexStyle } from './style'
import {
  formInitialValues,
  IFormData,
  registerSchema,
} from './utils/registerSchema'
import {
  getPolicyStorage,
  postUserData,
  uploadImageToStorage,
} from './utils/requestToApi'

interface FormState {
  imageBlob: any
  confirmOpen: boolean
  imageRequired: boolean
  submitClick: boolean
  data: IUserData
  isSubmitLoading: boolean
  submitError: IRequestError | null
}

interface FormProps {
  history: History<LocationState>
}

class Form extends React.PureComponent<FormProps, FormState> {
  static contextType = UserContext
  constructor(props: FormProps) {
    super(props)
    this.state = {
      imageBlob: 0,
      confirmOpen: false,
      imageRequired: false,
      submitClick: false,
      data: formInitialValues,
      isSubmitLoading: false,
      submitError: null,
    }
  }
  submit: () => void = async () => {
    this.setState({
      isSubmitLoading: true,
    })
    const { imageBlob, data } = this.state
    const { userData, load: loadUser } = this.context
    const { history } = this.props
    const edit =
      imageBlob !== 0 ||
      userData?.isNameWrong ||
      !userData?.data ||
      userData?.data.nickname !== data.nickname

    if (imageBlob !== 0) {
      const resPolicy = await getPolicyStorage()
      if (resPolicy.status === 401) {
        history.push('/login')
      } else if (resPolicy.status === 500) {
        this.setState({
          submitError: RequestError(
            resPolicy.status,
            resPolicy.headers['x-request-id']
          ),
          isSubmitLoading: false,
        })
      }
      const resUpload = await uploadImageToStorage(imageBlob, resPolicy.data)
      if (resUpload.status !== 204) {
        this.setState({
          submitError: RequestError(
            resUpload.status,
            `image-${resUpload.status}`
          ),
          isSubmitLoading: false,
        })
        return
      }
    }
    const res = await postUserData(data, edit)
    if (res.status === 200 || res.status === 201) {
      loadUser()
      history.push('/form/complete')
    } else {
      this.setState({
        submitError: RequestError(res.status, res.headers['x-request-id']),
        isSubmitLoading: false,
      })
    }
  }
  openDialog: () => void = () => {
    this.setState({
      confirmOpen: true,
    })
  }
  closeDialog: () => void = () => {
    this.setState({
      confirmOpen: false,
    })
  }
  confirm: (value: IUserData) => void = (value) => {
    const { imageBlob } = this.state
    const { userData } = this.context

    if ((!userData?.data || userData?.isImgWrong) && imageBlob === 0) {
      return
    } else {
      this.setState(
        {
          data: value,
        },
        this.openDialog
      )
    }
  }
  setImageBlob: (blob: any) => void = (blob) => {
    this.setState({
      imageBlob: blob,
    })
  }
  setImageRequired: (param: boolean) => void = (param) => {
    this.setState({
      imageRequired: param,
    })
  }
  setSubmitClick: (param: boolean) => void = (param) => {
    this.setState({
      submitClick: param,
    })
  }
  render() {
    const {
      user: userData,
      isLoaded: isUserLoaded,
      error: userLoadError,
    } = this.context
    const { submitError, imageRequired, isSubmitLoading } = this.state
    if (!isUserLoaded || isSubmitLoading) return <Loading />
    else if (userLoadError) return <HandleRequestError {...userLoadError} />
    else if (userData?.isConfirm) return <Redirect to="/" />
    else if (submitError) return <HandleRequestError {...submitError} />
    else
      return (
        <FormUI
          userData={userData}
          imageRequired={imageRequired}
          imageBlob={this.state.imageBlob}
          isConfirmOpen={this.state.confirmOpen}
          submitClick={this.state.submitClick}
          setSubmitClick={this.setSubmitClick}
          confirm={this.confirm}
          setImageBlob={this.setImageBlob}
          setImageRequired={this.setImageRequired}
          closeDialog={this.closeDialog}
          submit={this.submit}
        />
      )
  }
}

interface IFormUI {
  userData: IUser
  imageRequired: boolean
  isConfirmOpen: boolean
  imageBlob: Blob | number
  submitClick: boolean
  setSubmitClick: (param: boolean) => void
  setImageBlob: (blob: any) => void
  setImageRequired: (param: boolean) => void
  confirm: (value: IUserData) => void
  closeDialog: () => void
  submit: () => void
}

function FormUI(props: IFormUI) {
  const {
    userData,
    imageBlob,
    imageRequired,
    isConfirmOpen,
    submitClick,
    setSubmitClick,
    confirm,
    setImageBlob,
    setImageRequired,
    closeDialog,
    submit,
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
        validate={(values) => {
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
        {(props) => {
          return (
            <FormikForm>
              <Typography className={style.title}>
                {!userData.data ? t('register') : t('editProfile')}
              </Typography>
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
              <Box>
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
              </Box>
            </FormikForm>
          )
        }}
      </Formik>
      <FormDialog
        confirmOpen={isConfirmOpen}
        closeDialog={closeDialog}
        submit={submit}
      />
    </Box>
  )
}

export default Form
