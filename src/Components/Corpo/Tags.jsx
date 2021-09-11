import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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
    const [tags, setTags] = useState([]);
    const { produto } = useParams();
    
    useEffect(() => {

        fetch(`http://localhost:4000/api/items?q=${produto}`)
        .then(resServidor => {
            return resServidor.json()
        })
        .then(resConvertida => {
            return setTags(resConvertida.categories);
        })
    }, [ produto ])

    function componentesDados(dados) {
        if(dados !== undefined && dados.length !== 0) {
            return(
                dados.map((item) => (
                    <Link to={`/${item}`}>
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