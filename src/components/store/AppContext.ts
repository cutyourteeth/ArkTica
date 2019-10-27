import React from 'react'

export interface ILog {
  content: string
}

const emptyLogArray: ILog[] = [{ content: '' }]
const emptyAppStore = {
  logs: emptyLogArray
}

const AppContext = React.createContext(emptyAppStore)

export default AppContext
