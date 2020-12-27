import axios from 'axios'
import { API_URL } from '../utils'
import { RequestError } from '../components/common/Error'

export type History = {
  fromBaan: number | null
  preferBaan: number | null
  assignedBaan: number | null
  round: number
}

const config = {
  headers: { 'No-CSRF': true },
  withCredentials: true,
  baseURL: API_URL,
}

const apiClient = axios.create(config)

async function GetHistory(): Promise<Array<History> | null> {
  try {
    const res = await apiClient.get<Array<History> | null>(
      '/assignment/getHistory'
    )
    if (res.status !== 200)
      throw RequestError(res.status, res.headers['x-request-id'])
    return res.data
  } catch (e) {
    throw RequestError(e.response.status, e.response.headers['x-request-id'])
  }
}

export { GetHistory }
