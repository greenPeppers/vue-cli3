import axios from 'axios'
import baseURL from './baseUrl'

axios.defaults.timeout = 20 * 1000
// post请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 全局请求头
axios.defaults.baseURL = baseURL[process.env.NODE_ENV]
// 允许请求携带cookie
axios.defaults.withCredentials = true

const methods = ['get', 'post', 'put', 'delete', 'all']

const http = {}

methods.forEach(method => {

  http[method] = (...options) => {
    return axios[method](...options)
  }

})

const beforeRequest = axios.interceptors.request.use.bind(axios.interceptors.request)

const beforeResponse = axios.interceptors.response.use.bind(axios.interceptors.response)

export {
  http,
  beforeRequest,
  beforeResponse
}