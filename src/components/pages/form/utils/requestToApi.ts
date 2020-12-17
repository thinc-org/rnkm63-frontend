import axios, { AxiosPromise } from 'axios'
import { API_URL } from '../../../../utils'
import { IFormData } from './registerSchema'

const config = {
  headers: { 'No-CSRF': true },
  withCredentials: true,
}

const getProfile = function (): AxiosPromise<any> {
  const url = `${API_URL}/user/profile`
  return axios.get(url, config)
}

const postUserData = function (
  data: IFormData,
  edit: boolean
): AxiosPromise<any> {
  const reqBody = {
    data,
    edit,
  }
  return axios.post(`${API_URL}/user/profile`, reqBody, config)
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
