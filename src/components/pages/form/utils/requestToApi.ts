import axios, { AxiosPromise } from 'axios'
import { API_URL } from '../../../../utils'
import { IFormData } from './registerSchema'

const config = {
  headers: { 'No-CSRF': true },
  withCredentials: true,
  baseURL: API_URL,
}
const apiClient = axios.create(config)

const getProfile = function (): AxiosPromise<any> {
  return apiClient.get('/user/profile').catch((err) => err.response)
}

const postUserData = function (
  data: IFormData,
  edit: boolean
): AxiosPromise<any> {
  const reqBody = {
    data,
    edit,
  }
  return apiClient.post('/user/profile', reqBody).catch((err) => err.response)
}

const getPolicyStorage = function (): AxiosPromise<any> {
  return apiClient.get('/user/getUploadPolicy').catch((err) => err.response)
}

const getImageURL = function (): AxiosPromise<any> {
  return apiClient.get('/user/getUploadFileName').catch((err) => err.response)
}

const uploadImageToStorage = function (blobImg: Blob, policy: any) {
  let bodyFormData = new FormData()

  const policyDocument = policy.fields
  const urlStorage = policy.url

  bodyFormData.append('file', blobImg)

  const fieldKeys = Object.keys(policyDocument)
  fieldKeys.forEach((val: string) => {
    bodyFormData.append(val, policyDocument[val])
  })

  bodyFormData.append('Content-Type', 'image/jpeg')

  return axios
    .post(urlStorage, bodyFormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .catch((err) => err.response)
}

export {
  getProfile,
  postUserData,
  getPolicyStorage,
  uploadImageToStorage,
  getImageURL,
}
