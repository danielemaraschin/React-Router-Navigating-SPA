import React, { useEffect, useState } from "react";
import { busca } from "../assets/api/api";
import { useParams  } from "react-router";
import '../assets/css/post.css'

const Post = () => {
    const { id } = useParams()
    const [post, setPost] = useState({}) /*post sao objetos entao inicia com obj vazio */
    useEffect(() => {busca(`/posts/${id}`, setPost)},[id])
        /* vamos usar o useEffect aqui pq temos que buscar os posts que estao em outra pag, usaremos um get para pegar o id do post requisitado */ 
    /*altera o componente sempre que alterar o id */

    return ( //aqui dentro do return criamos como queremos que o post seja exibido 

        <main className="container flex flex--centro">
            <article className="cartao post">
                <h2 className="cartao__titulo">{post.title}</h2>
                <p className="carta__texto">{post.body}</p>
            </article>
        </main>

    )
}

export default Post