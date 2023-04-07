import axios, { type Method } from 'axios'

const baseURL = 'http://codercba.com:1888/airbnb/api/'
const instance = axios.create({
  baseURL,
  timeout: 10000
})

instance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

const request = <T>(
  url: string,
  method: Method = 'get',
  submitData?: object
) => {
  return instance.request<null, T>({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}

export { request, baseURL }
