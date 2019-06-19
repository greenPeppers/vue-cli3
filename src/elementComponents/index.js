// import * as elementComponents from 'element-ui'
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';

import {
  Button,
} from 'element-ui'

const elementComponents = {
  Button,
}

Object.values(elementComponents).forEach(item => {
  if (item instanceof Function || typeof item === 'string') return
  Vue.use(item)
})