import axios from 'axios'
import baseURL from './baseUrl'
import api from './api'
import errorMsg from './errorMsg'
import {
  Message,
  Loading,
} from 'element-ui'

const methods = ['get', 'post', 'put', 'delete', 'all']

const http = {}
/**
 * 请求队列，保存请求cancelToken 、 请求配置
 */
const httpQueue = {}

const CancelToken = axios.CancelToken;

axios.defaults.timeout = 20 * 1000

// 请求参数
// axios.defaults.headers.common['token'] = window.localStorage.token || '';
// axios.defaults.headers.common['user'] = window.localStorage.user || '';

// 全局请求头
axios.defaults.baseURL = baseURL[process.env.NODE_ENV]
// 允许请求携带cookie
axios.defaults.withCredentials = true

methods.forEach(method => {
  http[method] = (...options) => {
    return axios[method](...options)
  }
})

/**
 * 请求拦截
 */
axios.interceptors.request.use(config => {
  // console.log(`config`, config);
  // 用户信息
  config.headers.common.token = window.localStorage.token || '';
  config.headers.common.user = window.localStorage.user || '';
  // 生成请求source
  let source = CancelToken.source();
  // 开启去重前提下，是否存在，存在及取消
  if (config.isCancelRepeat && httpQueue[config.url]) httpQueue[config.url].source.cancel('Cancel network request')
  // 取消网络请求的token
  config.cancelToken = source.token
  // 保存请求
  httpQueue[config.url] = {
    source,
    // 是否开启loading
    loadingInstance: config.isLoading ? Loading.service({}) : null,
    isFilter: config.isFilter
  }
  return config
}, error => error)

/**
 * 响应拦截
 */
axios.interceptors.response.use(response => {

  let key = response.config.url.split(response.config.baseURL)[1];
  key = key ? key : response.config.url;
  let request = httpQueue[key];
  if (request && request.loadingInstance) request.loadingInstance.close();

  delete httpQueue[key]

  let res = response.data;
  // console.log(`res`, res);
  // 是否异常
  if (res.code === 200 || response.config.isFilter) return res;
  // else return abnormal(res)
  else return false
}, error => {
  // console.log(`error`, error);
  Object.values(httpQueue).forEach(item => {
    if (item.loadingInstance) item.loadingInstance.close();
  })

  if (error && error.response) Message({
    message: errorMsg[error.response.status],
    type: 'error',
    showClose: true
  });

  return false
})

/**
 * 异常处理
 */
function abnormal(res) {
  // 是否token过期
  if (res.code === 401 || res.code === 400) {
    Message.error({
      message: '未登录，或登录失效，请登录',
      type: 'warning',
      showClose: true
    });
    setTimeout(_ => {
      removeLocalStorage()
      window.location.href = 'https://sso.aihuoshi.net/logout?service=' + window.location.origin;
    }, 1000)
  } else {
    Message({
      message: res.msg || res.message,
      type: 'warning',
      showClose: true
    });
  }
  return false
}

/**
 * 清空缓存
 */
function removeLocalStorage() {
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('user');
  window.localStorage.removeItem('permissionList');
  window.localStorage.removeItem('permissionNavList');
}

export {
  api,
  http,
  httpQueue,
}

export {
  loginUrl
}
from './baseUrl'

export default {
  install(Vue) {
    Vue.prototype.$http = http
    Vue.prototype.$api = api
  }
}