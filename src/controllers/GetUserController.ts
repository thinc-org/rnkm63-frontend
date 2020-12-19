import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../utils'
import { IUser } from '../contexts/UserContext'
import { RequestError } from '../components/common/Error'

const config = {
  headers: { 'No-CSRF': true },
  withCredentials: true,
  baseURL: API_URL,
}

const apiClient = axios.create(config)

const get = async function (): Promise<AxiosResponse<IUser | null>> {
  try {
    const res = await apiClient.get<IUser | null>('/user/profile')
    return res
  } catch (e) {
    throw RequestError(e.response.status, e.response.headers['x-request-id'])
  }
}

const getUser = async function (): Promise<IUser | null> {
  const res = await get()
  if (res.status !== 200) {
    throw RequestError(res.status, res.headers['x-request-id'])
  } else {
    return res.data
  }
}

export default getUser
