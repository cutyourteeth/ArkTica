import React from 'react'

/**
 * 制作上下文区域共享状态
 * @param {*} defaultValue 传入默认的上下文value
 * @returns {} Store
 */

function createContextStore(createValue: (prop: any) => any) {
  let Context = React.createContext(null)

  let Provider = function(value: any) {
    return React.createElement(Context.Provider, { value: createValue(value) },value.children)
  }

  let Store = function() {
    let s = React.useContext(Context)
    return s
  }

  // 在Store上, 注册Provider
  Object.assign(Store, { Provider })
  return Store
}

/* 暴露的上下文存储 */
const contextStore = {
  create: createContextStore
}
export default contextStore
