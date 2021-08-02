import React, { useEffect, useState } from 'react'
import { Route, useParams, useRouteMatch, Link } from 'react-router-dom'
import '../assets/css/blog.css'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'
import { busca } from '../assets/api/api'

const Categoria = () => {
    const { id } = useParams()
    const { url,  path } = useRouteMatch()
    console.log(url)
    const [subcategorias, setSubcategorias] = useState([])
    //efeito colateral de atualizacao de componentes de api
    useEffect(() => {       //poderiamos colcoar o setSubcategorias, mas vamos colocar uma funcao anonima q recebe como parametro categoria e então executa setSubcategoria
        busca(`/categorias/${id}`, (categoria) => {
            setSubcategorias(categoria.subcategorias)
        })
    }, [id])

    return (
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Blog News</h2>
            </div>
            <ListaCategorias /> {/*Dentro das categorias tem os posts */}
            <ul className="lista-categorias container flex">
                {
                    subcategorias.map((subcategoria) => (
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`} key={subcategoria}>
                            <Link to={`${url}/${subcategoria}`}>
                                {subcategoria} {/*aqui  vai pegar o nome dessa subcategoria*/}
                            </Link>

                        </li>
                    ))

                }
            </ul>
            <Route exact path={`${path}/`}> {/*vai mostrar em qual caminho esta, wellness ou comportamento, conforme clicamos em cima */}
                <ListaPost url={`/posts?categoria=${id}`} /> {/*queremos o post especifico*/}
            </Route>
        </>
    )
}

export default Categoria