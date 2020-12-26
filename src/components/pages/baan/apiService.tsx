import { AxiosPromise } from 'axios'
import { apiClient } from 'config/axiosInstance'

import { ICapacityData } from './@types/data'

export function getCapacityData(): AxiosPromise<ICapacityData[]> {
  return apiClient
    .get('/user/getAllUserPreferBaan')
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
