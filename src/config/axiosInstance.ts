import axios from 'axios'
import { API_URL } from 'utils'

const config = {
  headers: { 'No-CSRF': true },
  withCredentials: true,
  baseURL: API_URL,
}
export const apiClient = axios.create(config)
