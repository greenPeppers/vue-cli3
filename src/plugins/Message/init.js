import template from './template.vue'
import Vue from 'vue'

let templateConstructor = Vue.extend(template);

let instance;

let instances = [];

let messageId = 1;

const Message = (options = {}) => {
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  let userOnClose = options.onClose;

  let id = `message_${messageId}`;

  options.onClose = function () {

    Message.close(id, userOnClose)
    
  }

  instance = new templateConstructor().$mount();

  Object.assign(instance.$data, options)

  instance.id = id

  document.body.appendChild(instance.$el);

  instance.visible = true

  instances.push(instance);

  return instance
}

Message.close = function (id, onClose) {

  instances.map((item, index) => {

    if (id === item.id && (onClose instanceof Function)) onClose(item);

    instances.splice(index, 1)

    return item
  })
}

export default Message