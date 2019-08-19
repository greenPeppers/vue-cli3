import Vue from 'vue'
import Router from 'vue-router'
import routes from './config'
import store from '@/store'
import { UPDATEROUTERS, } from '@/store/modules/Routers/actionsType'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/**
 * 导航前置守卫
 */
router.beforeEach((to, from, next) => {
  let routeItem = {
    name: to.name,
    path: to.path,
    query: to.query,
    params: to.params,
    meta: to.meta,
  }
  store.dispatch(`routers/${UPDATEROUTERS}`, routeItem)
  next()
})

/**
 * 导航后置守卫
 */
router.afterEach((to, from) => {
  // store.commit('routers/DELETE', from.name)
  // console.log('from', from);
})

export default router