import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

const ContainerProduto = styled.section`
    width: 65%;
    height: auto;
    background-color: white;
    margin-left: 17.5%; 
    border-radius: 4px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;

`;

const ContainerAux = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
`;

const FotoProduto = styled.img`
    width: 680px;
    height: auto;
    border-radius: 4px;
`;

const ContainerInfo = styled.article`
    width: 33.3%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
`;

const ContainerDescricao = styled.article`
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    margin-top: 9%;
`;

const NomeProduto = styled.h2`
    font-size: 24px;
    text-weight: bold;
    margin: 16px 0 32px 0;
`;

const PrecoProduto = styled.h1`
    font-size: 46px;
    margin-bottom: 32px;
`;

const BotaoCompra = styled.button`
    width: 100%;
    background-color: #3483FA;
    height: 60px;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 4px;
`;

const TituloDescricao = styled.h3`
    font-size: 28px;
    margin-bottom: 32px;
`;

const Produto = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {


        fetch(`http://localhost:4000/api/items/${id}`)
        .then(resServidor => {
                return resServidor.json();
        })
        .then(resConvertida => {
            return setItem(resConvertida.item);
        })
    }, [ id ]);

    function componentesProduto(dados) {
        if(dados !== undefined && dados.length !== 0) {
            return (<>
            <ContainerAux>
                <FotoProduto src={dados.picture} />
                    <ContainerInfo>
                    <p>{dados.condition} - {dados.sold_quantity} vendidos</p>
                    <NomeProduto>{dados.title}</NomeProduto>
                    <PrecoProduto>$ {dados.price.amount}</PrecoProduto>
                    <BotaoCompra>Comprar</BotaoCompra>
                </ContainerInfo>
            </ContainerAux>
           <ContainerDescricao>
                <TituloDescricao>Descrição do Produto</TituloDescricao>
               <p>{dados.description}</p>
           </ContainerDescricao>    
           </>);
        } else {
            return;
        }
    }

    return(
        <ContainerProduto data-testid='conteiner-produto'>
        {
            componentesProduto(item)
        }
        </ContainerProduto>

    );
}

export default Produto;