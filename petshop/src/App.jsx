import React from 'react'
import './assets/css/base/base.css'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'

function App() {
  const Router = () => {
    const location = window.location.pathname
    if(location === '/sobre'){
      return <Sobre/> // se for no endereco '/sobre' vai para a pagina sobre.js
    }else{
      return <Home /> //se for para qualquer outro endereco vai pra Home.js
    }
  }
  return (
  <>
    {Router ()}
  </>
  )
}

export default App
