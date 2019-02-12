// 封装js
const getById = (id) => typeof id === 'string' ? document.getElementById(id) : id
const getByClass = (className) => typeof className === 'string' ? document.getElementsByclass(className) : className

export default {
  getById,
  getByClass
}
