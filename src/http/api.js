/**
 * 基础路径
 */
const basePath = '/api/v1.0'
/**
 * 数据源前置路径呢
 */
const source = `${basePath}/source`
/**
 * 入口模块前置路径
 */
const entrance = `${basePath}/entrance`
/**
 * 任务模块前置路径
 */
const task = `${basePath}/task`

export default {
  // 数据源分类单条数据操作 get: 获取, delete:删除, put: 修改 
  'operateDataSourceClassification': `${source}/type/detail`,
  // 数据源分类列表新增获取
  'dataSourceClassification': `${source}/type`,
  // 数据源列表
  'dataSourceList': `${source}/list`,
  // 国内外数据量
  'areaNumber': `${source}/area/number`,
  // 添加数据源
  'addDataSource': `${source}/list`,
  // 收藏数据源
  'dataSourceCollect': `${source}/collect`,
  // 数据源操作 数据拼接再路径后
  'operateDataSource': `${source}/detail`,
  // 入口列表数据
  'entranceList': `${entrance}/list`,
  // 入口操作
  'operatEntrance': `${entrance}/detail`,
  // 入口复制
  'copyEntrance': `${entrance}/copy`,
  // 任务列表数据
  'taskList': `${task}/list`,
  // 任务操作
  'operatTask': `${task}/detail`,
  // 上传文件
  'taskFile': `${task}/file`,
  // 任务复制
  'copyTask': `${task}/copy`,
  // 开始任务
  'openTask': `${task}/open`,
  // 实例列表
  'instancesList': `${task}/instances/list`,
  // 任务详情操作
  'operatInstances': `${task}/instance/detail`,
  // 任务重新抓取
  'restartInstances': `${task}/instance/restart`,

}