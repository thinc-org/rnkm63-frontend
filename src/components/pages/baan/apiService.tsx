import axios, { AxiosPromise } from 'axios'
import { API_URL } from 'utils'

interface ICapacityData {
  id: number
  capacity: number
  memberCount: number
}

const config = {
  headers: { 'No-CSRF': true },
  withCredentials: true,
  baseURL: API_URL,
}
const apiClient = axios.create(config)

export function getCapacityData(): AxiosPromise<ICapacityData[]> {
  return apiClient
    .get('/baan/generateBaanDatabase')
    .catch((err) => err.response)
}

export function postRequestBaan(id: number): AxiosPromise<string> {
  const body = {
    preferBaan: id,
  }
  return apiClient
    .post('/user/requestBaanChange', body)
    .catch((err) => err.response)
}
