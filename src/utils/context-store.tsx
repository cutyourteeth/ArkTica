import React from 'react'

function useContextStore(children:React.ReactElement,stateAndSetters: any, name: string) {
  const acceptsValue = {}

  const Context = React.createContext(acceptsValue)

  const ContextStore = <Context.Provider value={stateAndSetters}>{children}</Context.Provider>

  return ContextStore
}

export default useContextStore
