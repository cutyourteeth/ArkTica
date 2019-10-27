import { useState, useMemo } from 'react'

export interface ILog {
  content: string
}

const emptyLogArray: ILog[] = [{ content: '' }]
const emptyAppStore = {
  logs: emptyLogArray
}

const useApp = () => {
  const [appStore, setAppStore] = useState(emptyAppStore)

  const setters = useMemo(
    () => ({
      setLogs(logs: ILog[]) {
        setAppStore(s => {
          const updatedState = { ...s }
          updatedState.logs = logs
          return updatedState
        })
      }
    }),
    []
  )

  return [appStore, setters] as const
}

export default useApp
