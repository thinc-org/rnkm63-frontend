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
  return apiClient.get('/user/profile')
}

const postUserData = function (
  data: IFormData,
  edit: boolean
): AxiosPromise<any> {
  const reqBody = {
    data,
    edit,
  }
  return apiClient.post('/user/profile', reqBody)
}

const getPolicyStorage = function (): AxiosPromise<any> {
  return axios.get(`${API_URL}/user/uploadFileName`, config)
}

const uploadImageToStorage = function (
  blobImg: Blob,
  policy: any,
  filename: string
) {
  const bodyFormData = new FormData()
  const fileImg = new File([blobImg], filename, {
    type: 'image/jpeg',
  })

  const policyDocument = policy.policyDocument
  const urlStorage = `${policyDocument.url}${policyDocument.fields.key}`

  bodyFormData.append('image', fileImg)

  const fieldKeys = Object.keys(policyDocument.fields)
  fieldKeys.forEach((val: string) => {
    bodyFormData.append(val, policyDocument.fields[val])
  })

  return axios.post(urlStorage, bodyFormData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export { getProfile, postUserData, getPolicyStorage, uploadImageToStorage }
