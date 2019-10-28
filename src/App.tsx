import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Editor from './components/Editor/Editor'
import Home from './components/Home/Home'
import Reader from './components/Reader/Reader'

const App: React.FC = () => {
  return (
    <Router >
      <Route component={Home} path="/" />
      <Route component={Editor} path="/editor"/>
      <Route component={Reader} path="/reader"/>
    </Router>
  )
}

export default App
