import { useMemo, useState } from 'react'

export interface ILog {
  content: string
  date: Date | string
  id: number | string
}

const emptyLogArray: ILog[] = []
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
      },

      addLog(log: ILog) {
        setAppStore(s => {
          const updatedState = { ...s }
          updatedState.logs.push(log)
          return updatedState
        })
      },
    }),
    []
  )

  return [appStore, setters] as const
}

// const useApp = useContextStore([appStore,setters],'AppContext')
export default useApp
// export default useAppStore
