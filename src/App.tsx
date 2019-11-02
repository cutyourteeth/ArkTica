import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Editor from './components/Editor/Editor'
import Home from './components/Home/Home'
import Reader from './components/Reader/Reader'
import useApp from './components/store/useApp'
import useContextStore from './utils/context-store'

const App: React.FC = () => {
  const appStore = useApp()

  const Raw = (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/editor" exact={true}>
            <Editor />
          </Route>
          <Route path="/reader" exact={true}>
            <Reader />
          </Route>
        </Switch>
      </Router>
    </div>
  )
  return useContextStore(Raw,appStore,'AppContext')
}

export default App
