/**
 * @author Caoxu
 * mark 生成器
 * 对同类mark公用一个生成器，保证mark独立唯一
 * 对不同类mark分类存储
 */

/**
 * 生成器存储
 */
let generatorDic = {};

/**
 * 全局唯一标志构造器
 * 实例提供遍历接口iterator
 */
class Generator {
  id = 0;
  marks = [];
  constructor(sign = 'sign') {
    this.sign = sign;
  }
  /**
   * 输出唯一mark
   * 拼接id防止有些渲染会在同一时间戳下生成，导致marker重复
   */
  * generator() {
    while (true) {
      this.id++;
      yield `hs__${this.sign}_${new Date().getTime()}${this.id}`
    }
  }
  /**
   * 提供遍历接口
   */
  *[Symbol.iterator]() {
    for (item of this.marks) {
      yield item
    }
  }
  /**
   * 获取拦截
   */
  get mark() {
    let mark = this.generator().next().value;
    this.marks.push(mark);
    return mark
  }
}

const MarkGenerator = (sign = 'sign') => {
  // 储存该类别标志generator，同种类型公用
  if (generatorDic[sign]) {
    return generatorDic[sign]
  } else {
    generatorDic[sign] = new Generator(sign)
    return generatorDic[sign]
  }
}

export default MarkGenerator