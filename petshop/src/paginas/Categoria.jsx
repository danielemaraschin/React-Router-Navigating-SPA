import React from 'react'
import { Route, useParams, useRouteMatch } from 'react-router-dom'
import '../assets/css/blog.css'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'

const Categoria = () => {
    const { id } = useParams()
    const {path} = useRouteMatch ()
    return(
        <>
        <div className="container">
            <h2 className="titulo-pagina">Pet News</h2>
        </div>
        <ListaCategorias/> {/*Dentro das categorias tem os posts */}
        <Route exact path={`${path}/`}> {/*vai mostrar em qual caminho esta, wellness ou comportamento, conforme clicamos em cima */}
            <ListaPost url={`/posts?categoria=${id}`} /> {/*queremos o post especifico*/}
        </Route>
        </>
    )
}

export default Categoria