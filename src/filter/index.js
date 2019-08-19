import Vue from 'vue'

const requireFilters = require.context('./', true, /\w+\/index.js$/)

requireFilters.keys().forEach(fileName => {
  let requireFilter = requireFilters(fileName)
  let requireFilterName = requireFilter.default.name || fileName.split('/')[1]
  Vue.filter(requireFilterName, requireFilter.default || requireFilter)
})
