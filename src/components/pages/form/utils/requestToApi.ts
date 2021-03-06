import axios, { AxiosPromise } from 'axios'
import { intoFailure } from 'components/ErrorProvider'
import { apiClient } from 'config/axiosInstance'

import { IFormData } from './registerSchema'

interface Policy {
  url: string
  fields: Record<string, string>
}

const postUserData = function (data: IFormData, edit: boolean): AxiosPromise {
  const reqBody = {
    data,
    edit,
  }
  return apiClient.post('/user/profile', reqBody).catch((err) => {
    throw intoFailure(err)
  })
}

const postLeaveActivity = function (): AxiosPromise {
  return apiClient.post('/user/leaveActivity').catch((err) => {
    throw intoFailure(err)
  })
}

const getPolicyStorage = function (): AxiosPromise<Policy> {
  return apiClient.get('/user/getUploadPolicy').catch((err) => {
    throw intoFailure(err)
  })
}

const uploadImageToStorage = function (blobImg: Blob, policy: Policy) {
  let bodyFormData = new FormData()

  const policyDocument = policy.fields
  const urlStorage = policy.url

  for (const [key, val] of Object.entries(policyDocument)) {
    bodyFormData.append(key, val)
  }

  bodyFormData.append('Content-Type', 'image/jpeg')
  bodyFormData.append('file', blobImg)
  return axios
    .post(urlStorage, bodyFormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .catch((err) => {
      const logMsg = err.response.data
      const beginIdx = logMsg.indexOf('<Code>')
      const endIdx = logMsg.indexOf('</Code>')
      err.requestID = `UploadImage-${logMsg.slice(beginIdx + 6, endIdx)}`
      throw intoFailure(err)
    })
}

export {
  getPolicyStorage,
  postLeaveActivity,
  postUserData,
  uploadImageToStorage,
}
