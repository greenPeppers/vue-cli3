import MessageShow from './init'
import selfMessage from './template'

export { Message } from './init'

export default {
  install(Vue) {
    Vue.prototype.$message = MessageShow
    Vue.component(selfMessage.name, selfMessage)
  },
  ...selfMessage
}