import './App.css'
import React from 'react'
import Editor from './components/Editor/Editor'
import Reader from './components/Reader/Reader'
import AppContext from './components/store/AppContext'

const App: React.FC = () => {
  return (
    <AppContext.Provider value={{ logs: [] }}>
      <Editor />
      <Reader />
    </AppContext.Provider>
  )
}

export default App
