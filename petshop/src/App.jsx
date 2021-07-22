import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './assets/css/base/base.css'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'

function App() {

  return (
    <Router>
      <Route>
        <Home />
      </Route>
      <Route>
        <Sobre />
      </Route>
    </Router>
  )
}

export default App
