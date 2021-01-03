import { FailureDisplay } from 'components/common/Error'
import Loading from 'components/common/Loading'
import { IFailure } from 'components/ErrorProvider'
import { IUserData, UserContext } from 'contexts/UserContext'
import { History, LocationState } from 'history'
import React from 'react'

import FormDialog from './component/formDialogComponent'
import FormUI from './component/formUI'
import { formInitialValues } from './utils/registerSchema'
import {
  getPolicyStorage,
  postLeaveActivity,
  postUserData,
  uploadImageToStorage,
} from './utils/requestToApi'

interface FormState {
  imageBlob: any
  confirmOpen: boolean
  imageRequired: boolean
  submitClick: boolean
  leaveOpen: boolean
  data: IUserData
  isSubmitLoading: boolean
  submitError: IFailure | null
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
      leaveOpen: false,
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
    const { user: userData, load: loadUser } = this.context
    const { history } = this.props
    const edit =
      imageBlob !== 0 ||
      userData?.isNameWrong ||
      !userData?.data ||
      userData?.data.nickname !== data.nickname

    let uploadFail = false

    if (imageBlob !== 0) {
      try {
        const resPolicy = await getPolicyStorage()
        await uploadImageToStorage(imageBlob, resPolicy.data)
      } catch (e) {
        uploadFail = true
        this.setState({
          submitError: e,
          isSubmitLoading: false,
        })
      }
    }
    try {
      if (!uploadFail) {
        await postUserData(data, edit)
        loadUser()
        history.push('/form/complete')
      }
    } catch (e) {
      this.setState({
        submitError: e,
        isSubmitLoading: false,
      })
    }
  }
  leaveActivity: () => void = async () => {
    const { load: loadUser } = this.context
    const { history } = this.props
    try {
      await postLeaveActivity()
      loadUser()
      history.push('/')
    } catch (e) {
      this.setState({
        submitError: e,
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
    const { user: userData } = this.context

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
  openLeaveDialog: () => void = () => {
    this.setState({
      leaveOpen: true,
    })
  }
  closeLeaveDialog: () => void = () => {
    this.setState({
      leaveOpen: false,
    })
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
    const { user: userData } = this.context
    const { submitError, imageRequired, isSubmitLoading } = this.state
    if (isSubmitLoading) return <Loading />
    else if (submitError) return <FailureDisplay failure={submitError} />
    else
      return (
        <React.Fragment>
          <FormUI
            userData={userData}
            imageRequired={imageRequired}
            imageBlob={this.state.imageBlob}
            submitClick={this.state.submitClick}
            setSubmitClick={this.setSubmitClick}
            openLeaveDialog={this.openLeaveDialog}
            confirm={this.confirm}
            setImageBlob={this.setImageBlob}
            setImageRequired={this.setImageRequired}
          />
          <FormDialog
            confirmOpen={this.state.confirmOpen}
            closeDialog={this.closeDialog}
            submit={this.submit}
            text="confirm"
          />
          <FormDialog
            confirmOpen={this.state.leaveOpen}
            closeDialog={this.closeLeaveDialog}
            submit={this.leaveActivity}
            text="leave"
          />
        </React.Fragment>
      )
  }
}

export default Form
