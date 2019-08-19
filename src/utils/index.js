import Vue from 'vue'

const requireFunctions = require.context('./', true, /\w{1,}\/index.js$/)

requireFunctions.keys().forEach(fileName => {
  let requireFunction = requireFunctions(fileName),
    functionName = requireFunction.default.name || fileName.split('/')[1];

  if (requireFunction.default)
    Vue.prototype[`$${functionName}`] = requireFunction.default;

})