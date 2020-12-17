import axios from 'axios'

type SimpleCallback = () => void

function Connect() {
  window.location.href =
    process.env.REACT_APP_CHULASSOAPI +
    '/login?service=' +
    process.env.REACT_APP_SERVICE +
    '/login'
}

function SendTicketToBack(ticket: string, callback: SimpleCallback) {
  let config = {
    params: {
      ticket: ticket,
    },
  }

  axios
    .get(process.env.REACT_APP_API + '/auth/verify', config)
    .then((res) => {
      callback()
    })
    .catch((err) => {
      throw new Error(err)
    })
}

function LogOut(callback: SimpleCallback) {
  axios
    .get(process.env.REACT_APP_API + '/auth/logout')
    .then((res) => {
      callback()
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export { Connect, SendTicketToBack, LogOut }
