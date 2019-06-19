// import Message from 'vue'
import { axiosHttp } from '@/http'

export default {
  name: 'sendData',
  // 只调用一次
  bind(el, binding, vnode) {
    // 精确判断对象的类型
    let { value } = binding,
        valueType = Object.prototype.toString.call(value);

    if (valueType !== '[object Object]') return console.error('"sendData directive": An object type parameter is required')

    el.onclick = function () {
      sendData(binding.value)
    }
  },
  // 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）
  inserted(el, binding, vnode) {
  },
  // 所在组件的 VNode 更新时调用，但是可能发生在其孩子的 VNode 更新之前。指令的值可能发生了改变也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
  update(el, binding, vnode) {
  },
  // 所在组件的 VNode 及其孩子的 VNode 全部更新时调用
  componentUpdated(el, binding, vnode) {
  },
  // 只调用一次， 指令与元素解绑时调用。
  unbind(el, binding, vnode) {
  }
}

// 埋点请求处理
async function sendData(params) {
  let res = await axiosHttp.get('/useFrequency', {params})
  console.log('sendData directive:', res);
}