import React from "react";
import {useParams} from "react";

const Subcategoria = () => {

    const SubCategoria = () => {
        const {subcategoria} = useParams()
        return(
            <ListaPost url={`/posts?subcategoria=${subcategoria}`} />
        )
    }
}

export Subcategoria