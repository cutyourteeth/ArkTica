import React, { useContext } from 'react'

function createContextStore(defaultValue: any) {
  let Context = React.createContext(null)

  let Provider = function(node: any) {
    return React.createElement(Context.Provider, { value: defaultValue }, node.children)
  }

  let Store = () => useContext(Context)

  // 在Store上, 注册Provider
  Object.assign(Store, { Provider })
  return Store
}

export default createContextStore
