import './App.css'
import React from 'react'
import Editor from './components/Editor/Editor'
import Reader from './components/Reader/Reader'

const App: React.FC = () => {
  return (
    <div>
      <Editor />
      <Reader />
    </div>
  )
}

export default App
