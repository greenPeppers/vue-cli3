import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 公共组件批量导入
import '@/components'
import '@/elementComponents'

// 工具
import '@/utils'

import '@/plugins'

// 自定义指令
import '@/directive'

// 全局filter
import '@/filter'

// 网络请求
import http from '@/http'
Vue.use(http)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
