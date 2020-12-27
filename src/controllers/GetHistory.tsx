import axios from 'axios'
import { intoFailure } from 'components/ErrorProvider'

import { API_URL } from '../utils'

export type ActivityHistory = {
  fromBaan: number
  preferBaan: number | null
  assignedBaan: number
  round: number
}

const config = {
  headers: { 'No-CSRF': true },
  withCredentials: true,
  baseURL: API_URL,
}

async function GetHistory(): Promise<Array<ActivityHistory>> {
  try {
    const res = await axios.get<Array<ActivityHistory>>(
      '/assignment/getHistory',
      config
    )
    if (res.status !== 200) throw intoFailure(res)
    return res.data
  } catch (e) {
    throw intoFailure(e)
  }
}

export { GetHistory }
