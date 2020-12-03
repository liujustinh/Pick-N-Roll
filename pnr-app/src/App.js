import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useHistory } from 'react-router-dom'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import HomePage from './components/HomePage'
import LaunchPage from './components/LaunchPage'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/login'>
          <LoginForm />
        </Route>
        <Route path='/register'>
          <RegisterForm />
        </Route>
        <Route path='/ball'>
          <HomePage />
        </Route>
        <Route path='/'>
          <LaunchPage/>
        </Route>
      </Switch>
    </div>
  )
}

export default App
