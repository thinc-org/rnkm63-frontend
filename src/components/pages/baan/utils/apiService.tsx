import { AxiosPromise } from 'axios'
import { intoFailure } from 'components/ErrorProvider'
import { apiClient } from 'config/axiosInstance'

import { ICapacityData } from '../@types/data'

export function getCapacityData(): AxiosPromise<ICapacityData[]> {
  return apiClient.get('/user/getAllUserPreferBaan').catch((err) => {
    throw intoFailure(err)
  })
}

export function postRequestBaan(id: number): AxiosPromise<string> {
  const body = {
    preferBaan: id,
  }
  return apiClient.post('/user/requestBaanChange', body).catch((err) => {
    throw intoFailure(err)
  })
}
