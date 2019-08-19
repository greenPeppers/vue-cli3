import {
  http,
  beforeRequest,
  beforeResponse
} from './config'
import api from './api'
import {
  Message,
  Loading,
} from 'element-ui'
import errorMsg from './errorMsg'

export {
  http as axiosHttp
}
from './config'

let loadingInstance;
/**
 * 请求拦截
 */
beforeRequest(config => {
  // console.log(`config`, config);
  // console.log(`isLoading`, config.isLoading);
  // 是否开启loading
  if (config.isLoading) loadingInstance = Loading.service({});
  return config
}, error => error)

/**
 * 响应拦截
 */
beforeResponse(response => {
  loadingInstance && loadingInstance.close()
  let res = response.data
  if (res.code !== 200) {
    Message({
      message: res.message,
      type: 'warning',
      showClose: true
    });
    return false
  } else return res.data;
}, error => {
  loadingInstance && loadingInstance.close()
  if (error && error.response) Message({
    message: errorMsg[error.response.status],
    type: 'error',
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