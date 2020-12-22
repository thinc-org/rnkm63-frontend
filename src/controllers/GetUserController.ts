import axios from 'axios'
import { RequestError } from 'components/common/Error'
import { IUser } from 'contexts/UserContext'
import { API_URL } from 'utils'

const config = {
  headers: { 'No-CSRF': true },
  withCredentials: true,
  baseURL: API_URL,
}

const apiClient = axios.create(config)

async function getUser(): Promise<IUser | null> {
  try {
    const res = await apiClient.get<IUser | null>('/user/profile')
    if (res.status !== 200)
      throw RequestError(res.status, res.headers['x-request-id'])
    return res.data
  } catch (e) {
    throw RequestError(e.response.status, e.response.headers['x-request-id'])
  }
}

export default getUser
