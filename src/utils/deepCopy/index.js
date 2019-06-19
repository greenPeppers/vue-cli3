/**
* 深拷贝
* @param {Object} obj 拷贝的对象
*/

const deepCopy = (obj) => {

  // 不排除null 和 undefined
 
  if (obj === null) return null;
 
  if (obj === void 0) return undefined;
 
  let resultObj = Array.isArray(obj) ? [] : {};
 
  for (let key in obj) {
 
    if (typeof obj[key] === 'object') resultObj[key] = deepCopy(obj[key]);
 
    else resultObj[key] = obj[key];
 
  }
  return resultObj
 };

export default deepCopy
 