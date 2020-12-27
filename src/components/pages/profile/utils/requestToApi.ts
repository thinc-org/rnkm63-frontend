import { AxiosPromise } from 'axios'
import { intoFailure } from 'components/ErrorProvider'
import { apiClient } from 'config/axiosInstance'

interface ReqInfo {
  baanID: number
  requestCount: number
  capacity: number
  memberCount: number
}
const getRound = function (): AxiosPromise<number> {
  return apiClient.get('/global/round').catch((err) => {
    throw intoFailure(err)
  })
}

const getAllRequestCount = function (): AxiosPromise<ReqInfo[]> {
  return apiClient.get('/user/getAllUserPreferBaan').catch((err) => {
    throw intoFailure(err)
  })
}

const postBaanChange = function (
  preferBaan: number | null
): AxiosPromise<null> {
  const reqBody = {
    preferBaan,
  }
  return apiClient.post('/user/requestBaanChange', reqBody).catch((err) => {
    throw intoFailure(err)
  })
}
export { getAllRequestCount, getRound, postBaanChange }
export type { ReqInfo }
