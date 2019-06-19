import {
  http,
  beforeRequest,
  beforeResponse
} from './config'
import api from './api'
import {
  Message
} from 'element-ui'
import errorMsg from './errorMsg'

export {
  http as axiosHttp
}
from './config'

/**
 * 请求拦截
 */
beforeRequest(config => {
  // TODO: 请求前处理
  // console.log('config', config);
  return config
}, error => error)

/**
 * 响应拦截
 */
beforeResponse(response => {
  // TODO: 数据处理
  return response
}, error => {
  if (error && error.response) Message({
    message: errorMsg[error.response.status],
    type: 'warning',
    showClose: true
  });
  return false
})

export default {
  install(Vue) {
    Vue.prototype.$http = http
    Vue.prototype.$api = api
  }
}