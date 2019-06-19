import Vue from 'vue'
import Router from 'vue-router'
import routes from './config'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/**
 * 导航前置守卫
 */
// router.beforeEach((to, from, next) => {
//   console.log('to', to);
//   console.log('from', from);
//   next()
// })

/**
 * 导航后置守卫
 */
// router.afterEach((to, from) => {

// })

export default router