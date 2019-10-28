import React from 'react'
import Editor from './components/Editor/Editor'
import Reader from './components/Reader/Reader'
import useApp from './components/store/useApp'

const App: React.FC = () => {
  const AppStore = useApp()
  console.log(AppStore)

  return (
    // <div>
    //   <Editor />
    //   <Reader />
    // </div>
    <AppStore.Provider>
      <Editor />
      <Reader />
    </AppStore.Provider>
  )
}

export default App
