import axios from 'axios'
import { intoFailure } from 'components/ErrorProvider'
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
    if (res.status !== 200) throw intoFailure(res)
    return res.data
  } catch (e) {
    throw intoFailure(e)
  }
}

export default getUser
