import { useMemo, useState } from 'react'
import contextStore from '../../utils/context-store'

export interface ILog {
  content: string
  date: Date
  id: number | string
}

const emptyLogArray: ILog[] = [{ content: '', id: 0, date: new Date() }]
const emptyAppStore = {
  logs: emptyLogArray
}

const useAppStore = () => {
  const [appStore, setAppStore] = useState(emptyAppStore)

  const setters = useMemo(
    () => ({
      setLogs(logs: ILog[]) {
        setAppStore(s => {
          const updatedState = { ...s }
          updatedState.logs = logs
          return updatedState
        })
      },

      addLog(log: ILog) {
        setAppStore(s => {
          const updatedState = { ...s }
          updatedState.logs.push(log)
          return updatedState
        })
      }
    }),
    []
  )

  return [appStore, setters] as const
}

const useApp = contextStore.create(useAppStore)
export default useApp
