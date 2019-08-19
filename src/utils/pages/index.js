/**
 * 分页管理器
 */

// 状态字典
const PagesStatus = {
  "FAIL": 0,
  "SUCCESS": 1,
  "EMPTY": 2,
  "LOADING": 3,
}

class Pages {
  constructor(options = {}) {
    const {
      p_size = 10, startPage = 0
    } = options
    // 每页页数
    this.p_size = p_size
    // 分页器状态
    this.state = PagesStatus.SUCCESS
    // 数据列表
    this.list = new Array()
    // 当前页数
    this.page = startPage
    // 总页数
    this.total = 1
  }
  /**
   * 初始化
   */
  init() {
    if (this.state === PagesStatus.LOADING) return;
    this.state = PagesStatus.LOADING
  }
  /**
   * 重置
   */
  refresh() {
    this.page = 1
    this.list = []
    this.p_size = 10
  }
  /**
   * 清空
   */
  empty() {
    this.list.splice(0)
  }
  /**
   * 
   * @param {Object} newPage 更新pages数据
   * newPage: {page, total, list, pageSize, state}
   */
  update(newPage) {
    ({
      page: this.page = this.page,
      total: this.total = this.total,
      list: this.list = this.list,
      p_size: this.p_size = this.p_size,
      state: this.state = this.state,
    } = newPage);
  }
}

export default Pages