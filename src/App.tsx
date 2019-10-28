import './App.css'
import React from 'react'
import Editor from './components/Editor/Editor'
import Reader from './components/Reader/Reader'
import Home from './components/Home/Home'

const App: React.FC = () => {
  return (
    <div>
      <Home />
      <Editor />
      <Reader />
    </div>
  )
}

export default App
