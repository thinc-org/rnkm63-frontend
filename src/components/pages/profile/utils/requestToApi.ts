import { AxiosPromise } from 'axios'
import { apiClient } from 'config/axiosInstance'

interface ReqInfo {
  baanID: number
  requestCount: number
  capacity: number
  memberCount: number
}
const getRound = function (): AxiosPromise<number> {
  return apiClient.get('/global/round').catch((err) => err.response)
}

const getAllRequestCount = function (): AxiosPromise<ReqInfo[]> {
  return apiClient
    .get('/user/getAllUserPreferBaan')
    .catch((err) => err.response)
}

const postBaanChange = function (
  preferBaan: number | null
): AxiosPromise<null> {
  const reqBody = {
    preferBaan,
  }
  return apiClient
    .post('/user/requestBaanChange', reqBody)
    .catch((err) => err.response)
}
export { getAllRequestCount, getRound, postBaanChange }
export type { ReqInfo }
