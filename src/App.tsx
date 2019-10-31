import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Editor from './components/Editor/Editor'
import Home from './components/Home/Home'
import Reader from './components/Reader/Reader'
import useApp from './components/store/useApp'

const App: React.FC = () => {
  const AppStore = useApp() as any
  console.log(AppStore)

  return (
    <AppStore.Provider>
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
    </AppStore.Provider>
  )
}

export default App
