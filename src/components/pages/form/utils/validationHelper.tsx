import { IUser, IUserData } from 'contexts/UserContext'
import { validateYupSchema, yupToFormErrors } from 'formik'
import React from 'react'

import { IFormData, registerSchema } from './registerSchema'

export function customValidation(
  imageRef: React.RefObject<HTMLInputElement>,
  submitClick: boolean,
  imageBlob: Blob | number,
  values: IUserData,
  userData: IUser,
  setImageRequired: (param: boolean) => void,
  setSubmitClick: (param: boolean) => void
) {
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
  return {}
}
