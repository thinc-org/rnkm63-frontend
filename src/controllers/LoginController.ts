import axios, { AxiosRequestConfig } from 'axios'
import { intoFailure } from 'components/ErrorProvider'
import { API_URL } from 'utils'

function Connect() {
  window.location.href =
    process.env.REACT_APP_CHULASSOAPI +
    '/login?service=' +
    process.env.REACT_APP_SERVICE +
    '/login'
}

async function SendTicketToBack(ticket: string): Promise<void> {
  let config: AxiosRequestConfig = {
    params: {
      ticket: ticket,
    },
    withCredentials: true,
  }

  try {
    return await axios.get(API_URL + '/auth/verify', config)
  } catch (e) {
    throw intoFailure(e)
  }
}

async function LogOut(): Promise<void> {
  try {
    return await axios.get(API_URL + '/auth/logout')
  } catch (e) {
    throw intoFailure(e)
  }
}

export { Connect, LogOut, SendTicketToBack }
