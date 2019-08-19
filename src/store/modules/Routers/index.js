import {
  UPDATEROUTERS,
} from './actionsType'
import {
  SETROUTERS,
  SETROUTERSDICTIONARY,
} from './mutationsType'
import { navRouterDictionary } from '@/router/routerDictionary'

const state = {
  routers: [], // 路由列表
  routerDictionary: {}, // 对应每个模块的路由列表
}

const mutations = {
  /**
   * 设置routers数据
   */
  [SETROUTERS](state, params) {
    // 取出存储
    let localStorageRouters = JSON.parse(localStorage.routers || "[]")
    // 是否已经存在
    let index = localStorageRouters.findIndex(item => item.name === params.name)
    // 更新 or push
    if (index > -1) {
      localStorageRouters[index] = params;
      // 删除当前选择路由以后的路由
      localStorageRouters = localStorageRouters.splice(0, index + 1)
    } else localStorageRouters.push(params);
    // 更新数据
    state.routers = localStorageRouters
    // 更新存储
    localStorage.routers = JSON.stringify(localStorageRouters)
  },
  /**
   * 设置路由字典
   */
  [SETROUTERSDICTIONARY](state, params) {
    // 取出缓存
    let routerDictionary = JSON.parse(localStorage.routerDictionary || "{}"),
      routerKey = params.meta.roote ? params.meta.roote.name : '';
    if (!routerKey) return console.error('params.meta.root.name is not defined')
    if (!routerDictionary[routerKey]) routerDictionary[routerKey] = [{
      name: routerKey,
      meta: navRouterDictionary[routerKey],
      query: {},
      params: {},
      path: `/${routerKey}`
    }]
    // 是否已经存在
    let index = routerDictionary[routerKey].findIndex(item => item.name === params.name)
    // 更新 or push
    if (index > -1) {
      routerDictionary[routerKey][index] = params;
      // 删除当前选择路由以后的路由
      routerDictionary[routerKey] = routerDictionary[routerKey].splice(0, index + 1)
    } else routerDictionary[routerKey].push(params);

    // 更新数据
    state.routerDictionary = routerDictionary
    // 更新存储
    localStorage.routerDictionary = JSON.stringify(routerDictionary)
  },
}

const actions = {
  /**
   * 更新路由栈
   * @param {Object} opts 更新数据
   */
  async [UPDATEROUTERS]({
    commit
  }, opts) {
    // 参数是否正确
    if (!opts || Object.prototype.toString.call(opts) !== "[object Object]") return console.error('arguments is not a Object');
    // 刷新routers状态数据
    commit(SETROUTERS, opts)
    // 刷新routerDictionary状态数据
    commit(SETROUTERSDICTIONARY, opts)
  },

  /**
   * 删除路由
   * @param {String} nameOrPath 路由名称或path
   */
  DELETE({
    state
  }, nameOrPath) {
    // 取出存储
    let localStorageRouters = JSON.parse(localStorage.routers || "[]")
    // 是否已经存在
    let index = state.routers.findIndex(item => (item.name === nameOrPath || item.path === nameOrPath))
    // 更新 or push
    if (index > -1) localStorageRouters.splice(index, 1);
    // 刷新状态管理
    state.routers = localStorageRouters
    // 更新存储
    localStorage.routers = JSON.stringify(localStorageRouters)
  },
}

const getters = {
  /**
   * 路由栈
   */
  routerList: state => state.routers,
  /**
   * 路由字典
   */
  routerDictionary: state => state.routerDictionary,
  /**
   * 根据route name获取路由数据
   */
  getRoute: state => (nameOrPath => {
    return state.routers.find(item => (item.name === nameOrPath || item.path === nameOrPath))
  }),
  /**
   * 当前路由
   */
  currentRoute: state => state.routers[state.routers.length - 1],
  /**
   * 当前所处模块routers
   */
  currentRouteDictionary: state => {
    let currentRoute = state.routers[state.routers.length - 1]
    if (!currentRoute.meta.roote) return []
    let routeKey = currentRoute.meta.roote.name
    return state.routerDictionary[routeKey]
  },
}

export default {
  name: 'routers',
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}