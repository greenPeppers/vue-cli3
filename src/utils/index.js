import Vue from 'vue'

const requireFunctions = require.context('./', true, /index.js+$/)

requireFunctions.keys().forEach(fileName => {

  let requireFunction = requireFunctions(fileName),
    functionName = fileName.split('/')[1];

  if (requireFunction.default)
    Vue.prototype[`$${functionName}`] = requireFunction.default;

})