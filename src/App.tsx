import React from 'react'
import Editor from './components/Editor/Editor'
import Reader from './components/Reader/Reader'
import AppContext from './components/store/AppContext'
import useApp from './components/store/useApp'

const App: React.FC = () => {
  const [appStore] = useApp()
  console.log(appStore)

  return (
    <AppContext.Provider value={null}>
      <Editor />
      <Reader logs={appStore.logs} />
    </AppContext.Provider>
  )
}

export default App
