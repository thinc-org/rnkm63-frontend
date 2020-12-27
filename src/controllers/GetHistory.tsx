import axios from 'axios'
import { intoFailure } from 'components/ErrorProvider'

import { API_URL } from '../utils'

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
    if (res.status !== 200) throw intoFailure(res)
    return res.data
  } catch (e) {
    throw intoFailure(e)
  }
}

export { GetHistory }
