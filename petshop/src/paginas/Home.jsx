import React from 'react'
import ListaPost from '../components/ListaPost'
import ListaCategorias from '../components/ListaCategorias'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet News</h2>
      </div>
      <ListaCategorias/>
      <ListaPost url={'/posts'}/>{/*ele que é responsavel por listar os posts e dentro dele ja tem td logica para exibir os posts. mas aqui ele ta pegando todos os posts*/}
    </main>
  )
}

export default Home
