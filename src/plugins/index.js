import Vue from 'vue'

const requirePlugins = require.context('./', true, /\w{1,}\/index.js$/)

requirePlugins.keys().forEach(fileName => {
  let requirePlugin = requirePlugins(fileName)
  Vue.use(requirePlugin.default || requirePlugin)
})

function animate(name, word) {
  this.name = name
  this.prototype.say = function() {
    console.log(`我是${this.name}:${word}!`);
  }
}

