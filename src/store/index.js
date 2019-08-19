import Vue from 'vue'
import Vuex from 'vuex'

/**
 *  模块
 */
let modules = {};

const requireModules = require.context('./', true, /\w+\/index.js$/);
requireModules.keys().forEach(modulePath => {
  let reqModule = requireModules(modulePath);
  let modulesName = reqModule.default.name || modulePath.split('/')[2];
  modules[modulesName] = reqModule.default
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules,
})