import Vue from 'vue'

const requireFilters = require.context('./', true, /\w{1,}\/index.js$/)

requireFilters.keys().forEach(fileName => {
  let requireFilter = requireFilters(fileName)
  let requireFilterName = fileName.split('/')[1]
  Vue.filter(requireFilterName, requireFilter.default || requireFilter)
})
