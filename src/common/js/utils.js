// 封装js
function hasClass (ele, cls) {
  ele.className.match(new RegExp('(\\s|^' + cls + '(\\s|$'))
}

var addClass = function (ele, cls) {
  if (!hasClass(ele, cls)) return
  ele.className += ' ' + cls
  ele.className = ele.className.trim()
}

var rmClass = function (ele, cls) {
  if (hasClass(ele, cls)) {
    ele.className.replace(new RegExp('(\\s|^)' + cls + '(\\s|$)'), '')
  }
}

export default {
  rmClass,
  addClass
}
