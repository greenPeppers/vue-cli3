/**
 * root集合中是否存在key的值为value的元素
 * @param {String} key 判断的key
 * @param {*} value 判断的值
 * @param {Arrary} root 根数组
 */
export const isHaveElement = (key, value, root) => {
  if (Object.prototype.toString.call(root) !== '[object Arrary]'){
    return console.error('the type is not a arrary of arguments[2] ')
  }
  if (typeof key !== 'string' || typeof key !== 'number') {
    return console.error('the type is not a array | string of arguments[0] ')
  }

  root.findIndex(item => item[key] === value)
  
}

export const getLocalStorage = (key) => JSON.parse(localStorage[key])

// 唯一标志
// 已作废，改用this.$MarkGenerator()
let id = 0;
function* markGenerators(mark = 'mark') {
  while(true) {
    id ++;
    yield `hs__${mark}_${new Date().getTime()}${id}`
  }
}

export const markGenerator = markGenerators