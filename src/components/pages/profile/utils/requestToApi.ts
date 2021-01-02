import { AxiosPromise } from 'axios'
import { intoFailure } from 'components/ErrorProvider'
import { apiClient } from 'config/axiosInstance'

interface ReqInfo {
  baanID: number
  requestCount: number
  capacity: number
  memberCount: number
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
export { getAllRequestCount, postBaanChange }
export type { ReqInfo }
