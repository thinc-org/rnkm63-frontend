import axios, { AxiosRequestConfig } from 'axios'
import { API_URL } from '../utils'

type SimpleCallback = () => void
type ErrorCallback = (status: number) => void

function Connect() {
  window.location.href =
    process.env.REACT_APP_CHULASSOAPI +
    '/login?service=' +
    process.env.REACT_APP_SERVICE +
    '/login'
}

function SendTicketToBack(
  ticket: string,
  successCallback: SimpleCallback,
  errorCallback: ErrorCallback
) {
  let config: AxiosRequestConfig = {
    params: {
      ticket: ticket,
    },
    withCredentials: true,
  }

  axios
    .get(API_URL + '/auth/verify', config)
    .then((res) => {
      successCallback()
    })
    .catch((err) => {
      errorCallback(err.response.status)
    })
}

function LogOut(callback: SimpleCallback) {
  axios
    .get(API_URL + '/auth/logout')
    .then((res) => {
      callback()
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export { Connect, SendTicketToBack, LogOut }
