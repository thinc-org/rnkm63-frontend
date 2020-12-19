import axios, { AxiosPromise } from 'axios'
import { API_URL } from '../../../../utils'
import { IFormData } from './registerSchema'

const config = {
  headers: { 'No-CSRF': true },
  withCredentials: true,
  baseURL: API_URL,
}
const apiClient = axios.create(config)

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

const uploadImageToStorage = function (blobImg: Blob, policy: any) {
  let bodyFormData = new FormData()

  const policyDocument = policy.fields
  const urlStorage = policy.url

  const fieldKeys = Object.keys(policyDocument)
  fieldKeys.forEach((val: string) => {
    bodyFormData.append(val, policyDocument[val])
  })

  bodyFormData.append('Content-Type', 'image/jpeg')
  bodyFormData.append('file', blobImg)
  return axios
    .post(urlStorage, bodyFormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .catch((err) => err.response)
}

export { postUserData, getPolicyStorage, uploadImageToStorage }
