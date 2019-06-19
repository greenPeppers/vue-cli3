import Vue from 'vue'

const requrirComponents = require.context('./', true, /\.vue/)

requrirComponents.keys().forEach(fileName => {

  let requrirComponent = requrirComponents(fileName),

    componentName = fileName.split('/')[1];

  Vue.component(componentName, requrirComponent.default || requrirComponent)

})