/**
 * @class
 * @classdesc 操作记录队列存储
 * current 保存的是最后做的任务
 * list 是任务集合
 * soleKey 当任务类型为Object时，指明去重的唯一key
 * isRepetition 是否开启去重，默认开启
 * update 向列表中添加任务，String | Object，为了区分元素与下标，所以不支持Number
 */
class Operation {
  list = []
  currentIndex = 0
  /**
   * @constructor
   * @param {String} soleKey 开启去重模式时的唯一字段 
   * @param {String} isRepetition 是否启用去重
   */
  constructor(config) {
    this.soleKey = config.key || ''
    this.isRepetition = Boolean(config.isRepetition)
    // 初始化最后操作对象
    if (this.soleKey) this.current = {}
    else this.current = ''

    this.refreshCurrent = this.current
  }
  /**
   * 更新
   * @param {Object|String} param 操作更新
   */
  update(param) {
    // 防止重复操作当前任务
    if (this.isCurrent(param)) return;
    // 保存当前操作对象
    this.current = param;
    // 不用去重
    if (!this.isRepetition) return this.list.push(param);
    // 去重
    let type = Object.prototype.toString.call(param)
    if (type === "[object Object]") this.updateObj(param);
    else if (type === "[object String]") this.updateStr(param);
  }

  isCurrent(param) {
    let {
      current,
      soleKey,
    } = this,
    type = Object.prototype.toString.call(param);

    if (type === "[object Object]") {
      if (!this.soleKey) throw Error('A unique flag is required to enable deduplication');
      return current[soleKey] === param[soleKey]
    } else if (type === "[object String]") return current === param;
  }

  updateObj(obj) {
    let index = this.list.findIndex(item => item[this.soleKey] === obj[this.soleKey])
    if(index < 0) this.currentIndex = this.list.push(obj) - 1;
    else this.currentIndex = index
  }

  updateStr(str) {
    let index = this.list.find(item => item === str)
    if(index < 0) this.currentIndex = this.list.push(str) - 1;
    else this.currentIndex = index
  }

  delete(param) {
    let type = Object.prototype.toString.call(param)
    if (type === "[object Number]") this.deleteIndex(param);
    else if (type === "[object String]") this.deleteStr(param);
    else if (type === "[object Object]") this.deleteObj(param);
  }

  deleteIndex(index) {
    let currentIndex = index - 1 >= 0 ? index - 1 : 0;
    this.list.splice(index, 1)
    this.currentIndex = currentIndex;
    this.current = this.list[currentIndex] || this.refreshCurrent
  }

  deleteStr(str) {
    let index = this.list.findIndex(item => item[this.soleKey] === str);
    if (index >= 0) this.deleteIndex(index)
  }

  deleteObj(obj) {
    let index = this.list.findIndex(item => item[this.soleKey] === obj[this.soleKey]);
    if (index >= 0) this.deleteIndex(index)
  }
}

export default Operation