/**
 * @author Caoxu
 * copy指令
 * 添加该指令可直接在目标标签内添加icon，点击icon可以复制到系统剪切板
 */

import clipboard from '@/utils/clipboard'
import MarkGenerator from '@/utils/markGenerator'
// mark生成器
const Generator = MarkGenerator('copy')

export default {
  name: 'copy',
  bind(el, binding) {
    render(el, binding)
  },
}

function render(el, binding) {
  // console.log(binding.value);
  let id = Generator.mark

  let iconTag = document.createElement('i')

  iconTag.setAttribute('id', id)
  iconTag.setAttribute('class', 'el-icon-document-copy')

  iconTag.style.cssText = "cursor: pointer;margin-left:5px;";
  iconTag.onclick = function (e) {

    e.stopPropagation()
    console.log(`id`, id);
    clipboard(binding.value, e)
  }
  el.appendChild(iconTag);
}