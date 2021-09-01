import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from "react-router-dom";
import shipping from '../../Assets/ic_shipping@2x.png.png.png';

const ContainerProdutos = styled.section`
    width: 65%;
    height: auto;
    background-color: white;
    margin-left: 17.5%; 
    border-radius: 4px;
    padding: 0 16px;

`;

const Card = styled.article`
    width: 100%;
    height: 212px;
    display: flex;
    flex-direction: row;
    justify-content: space-start;
    align-items: start;
    cursor: pointer;
    color: black;
    border-bottom: 2px solid #EEEEEE;

    &:last-child {
        border: none;
    }

`;

const FotoProduto = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 4px;
    margin-top: 16px;
`;

const DivInfo = styled.section`
    margin: 0 16px;
    width: 40%;
    margin-top: 48px;
`;

const PrecoProduto = styled.p`
    font-size: 24px;
    display: inline-block;
    margin-right: 16px;
`;

const NomeProduto = styled.p`
    font-size: 18px;
    margin-top: 32px;
`;

const LocalProduto = styled.p`
    font-size: 12px;
    margin-left: 20%;
    margin-top: 48px;
`;

const Shipping = styled.img`
    width: 20px;
    height: auto;
`;

const ListaProdutos = () => {
    const [produtos, setProdutos] = useState([]);
    const { produto } = useParams();
    let history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:4000/api/items?q=${produto}`)
            .then(resServidor => {
                return resServidor.json()
            })
            .then(resConvertida => {
                return setProdutos(resConvertida.items);
            })
    }, [produto])

    function FreeShipping(frete) {
        if(frete) {
            return <Shipping src={shipping} />
        } else {
            return;
        }
    };

    return(
        <ContainerProdutos data-testid='container-produtos'>
            {
                produtos.map((produto) => (
                <Card key={produto.id} data-testid='card-produto' onClick={() => {
                    history.push(`items/${produto.id}`);
                    }}>
                    <FotoProduto src={produto.pictures} data-testid='foto-produto'/> 
                    <DivInfo>
                        <PrecoProduto>$ {produto.price.amount}</PrecoProduto>                    
                        {FreeShipping(produto.free_shipping)}
                        <NomeProduto>{produto.title}</NomeProduto>
                    </DivInfo>
                    <LocalProduto>{produto.location}</LocalProduto>
                </Card>
               ))

            }
        </ContainerProdutos>
    );

};

export default ListaProdutos;