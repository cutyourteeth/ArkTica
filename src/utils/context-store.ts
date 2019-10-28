import React from 'react'

/**
 * 制作上下文区域共享状态
 * @param {*} defaultValue 传入默认的上下文value
 * @returns {} Store
 */
function createContextStore(createValue: (prop: any) => any) {
  let Context = React.createContext(null)

  let Provider = function(node: any) {
    return React.createElement(Context.Provider, { value: createValue(node) }, node.children)
  }

  let useStateController = function() {
    let v = React.useContext(Context)
    console.log(v)
    if (v) {
      return v
    }
    throw new Error('Missing <.Provider>')
  }

  //   let Store = () => useContext(Context)

  // 在Store上, 注册Provider
  Object.assign(useStateController, { Provider })
  return useStateController
}

/* 暴露的上下文存储 */
const contextStore = {
  create: createContextStore
}
export default contextStore
