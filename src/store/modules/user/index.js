// import { axiosHttp } from '@/http'
import {
  CHANGEUSERIFSTATUS,
  SETUSERIFO
} from './mutationsType'
import {
  GETUSERINFO
} from './actionsType'

const state = {
  userInfo: {
    status: true,
    data: {
      name: '未登录',
      address: '滨江区'
    },
  },
}

const mutations = {
  /**
   * 设置userInfo数据
   */
  [SETUSERIFO](state, opts) {
    state.userInfo.data = opts
  },
  /**
   * 修改是否已有请求的状态
   */
  [CHANGEUSERIFSTATUS](state, opts) {
    state.userInfo.status = opts
  },
}

const actions = {
  /**
   * 获取用户数据
   */
  async [GETUSERINFO]({
    commit,
    state,
  }, opts) {

    if (!state.userInfo.status) return

    console.log('opts', opts);

    commit(CHANGEUSERIFSTATUS, false)

    let result = await new Promise(resolve => {
      setTimeout(function () {
        resolve({
          name: '已登陆',
          address: '滨江区'
        })
      }, 1000)
    })

    commit(SETUSERIFO, result)

    commit(CHANGEUSERIFSTATUS, true)

    return new Promise(resolve => resolve(result))
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}