const proxyApi = process.env.REACT_APP_USE_PROXY === 'true'
export const API_URL = proxyApi
  ? '/api'
  : `${process.env.REACT_APP_API_HOST}/api`
