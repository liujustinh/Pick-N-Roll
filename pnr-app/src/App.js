import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useHistory } from 'react-router-dom'
import Header from './components/Header'
import LoginForm from './components/LoginForm'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/login'>
          <LoginForm />
        </Route>
      </Switch>
    </div>
  )
}

export default App
