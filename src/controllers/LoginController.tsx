import axios, { AxiosRequestConfig } from 'axios'
import { API_URL } from '../utils'

type SimpleCallback = () => void

function Connect() {
  window.location.href =
    process.env.REACT_APP_CHULASSOAPI +
    '/login?service=' +
    process.env.REACT_APP_SERVICE +
    '/login'
}

function SendTicketToBack(ticket: string, callback: SimpleCallback) {
  let config: AxiosRequestConfig = {
    params: {
      ticket: ticket,
    },
    withCredentials: true,
  }

  axios
    .get(API_URL + '/auth/verify', config)
    .then((res) => {
      console.log(res)
      callback()
    })
    .catch((err) => {
      throw new Error(err)
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
