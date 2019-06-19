import Vue from 'vue'

const requireDirctives = require.context('./', true, /\w{1,}\/index.js$/)

requireDirctives.keys().forEach( fileName => {

  let dirctive = requireDirctives(fileName)

  let dirctiveName = fileName.split('/')[1]

  Vue.directive(dirctiveName, dirctive.default || dirctive)
})