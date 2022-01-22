import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { cinzaEscuro } from '../Variaveis';

const ContainerTags = styled.section`
    width: 65%;
    padding: 16px 0;
    margin-left: 17.5%; 
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const ConteudoTags = styled.p`
    font-size: 14px;
    color: ${cinzaEscuro};
    margin: 0 0.4em;
    
    &:hover {
        text-decoration: underline ${cinzaEscuro}; 
        cursor: pointer;
    }
`;

const Tags = () => {
    const [ tags, setTags ] = useState([]);
    const { search } = useLocation()
    const searchParams = new URLSearchParams(search)
    const produto = searchParams.get('search');

    useEffect(() => {
        fetch(`http://localhost:4000/api/items?q=${produto}`)
        .then(resServidor => {
            return resServidor.json()
        })
        .then(resConvertida => {
            return setTags(resConvertida.categorias);
        })
    }, [ produto ])



    function componentesDados(dados) {
        if(dados !== undefined && dados.length !== 0) {
            return(
                dados.map((item) => (
                    <Link to={{
                                pathname: '/items',
                                search: `search=${item}`
                            }}
                        >
                        <ConteudoTags>{`${item} >`}</ConteudoTags> 
                    </Link>
                ))
            );
        } else {
            return;
        }
    }

    return(
        <ContainerTags>
            {
                componentesDados(tags)
            }
        </ContainerTags>
    );
}

export default Tags;