/**
 * @author caoxu
 * 正则表达式
 */
// 手机号
export const telephoneReg = /^0?(13[0-9]|15[012356789]|17[0135678]|18[0-9]|14[57])[0-9]{8}$/
// 座机号(有无"-"都可以)
export const phoneReg = /^0\d{2,3}(-|)[0-9]{4}(-|)[0-9]{3,4}$/
export const phoneReg400 = /^400(-|)[0-9]{4}(-|)[0-9]{3}/
export const phoneReg800 = /^800(-|)[0-9]{4}(-|)[0-9]{3}/
// 邮箱
export const mailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
// 身份证号
export const idNoReg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/
// 数字+字母+汉字 + '()' ===> 公司名称、店铺名称、生产厂家
export const companyNameReg = /^[\u4E00-\u9FA5A-Za-z0-9\s\(\)\（\）]+$/
// 数字+字母+汉字 + '()' + '-'  ===> 详细地址
export const addressReg = /^[\u4E00-\u9FA5A-Za-z0-9\s\(\)\（\）\-]+$/
// 数字+字母+汉字 + '()' + '【】'  ===> 商品名称、商品简介
export const productNameReg = /^[\u4E00-\u9FA5A-Za-z0-9\s\(\)\（\）\【\】]+$/
// 无特殊符号的字符串 ===> 法人姓名, 别称, 联系人, 营业范围
export const bossNameReg = /^[\u4E00-\u9FA5A-Za-z0-9\s]+$/
// 数字+字母 ===> 商品编码
export const productCodeReg = /^[a-zA-Z0-9]+$/
// 7位整数或小数点后两位 ===> 商品库存、商品价格
export const productStockReg = /^[0-9]{1,7}([.]{1}[0-9]{0,2})?$/

// 纯数字验证
export const reNumber = /^[0-9]+(.[0-9]{1,2})?$/

// 网址
export const urlRegExp = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/|www\.)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
