import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../Assets/Logo_ML@2x.png.png.png';
import lupa from '../../Assets/ic_Search@2x.png.png.png';
import { Link } from 'react-router-dom';
import { amarelo, cinzaClaro, preto } from '../Variaveis';

const Cabecalho = styled.header`
    width: 100%;
    height: 6vh;
    min-height: 60px;
    background-color: ${amarelo};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    height: auto;
    width: 65px;
    margin-right: 10px;
`;

const CaixaPesquisa = styled.section`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Formulario = styled.form`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InputPesquisa = styled.input`
    font-size: 18px;
    color: ${preto};
    width: 95%;
    height: 80%;
    border: none;
    padding: 0.5em 0.8em;
    box-shadown: none;
    outline: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
`;

const BotaoPesquisa = styled.button`
    width: 38px;
    height: 38px;
    border: none;
    cursor: pointer;
    background-color: ${cinzaClaro};
    font-size: 18px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
`;

const Lupa = styled.img`
    width: auto;
    height: 25px;
    margin-top: 5%;
`;

const Header = () => {
    const [valorPesquisa, setPesquisa] = useState('');

    return(
        <Cabecalho>
            <CaixaPesquisa>
                <Link 
                    to='/'
                >
                <Logo 
                    src={logo} 
                />
                </Link>
                <Formulario>
                    <InputPesquisa 
                        data-testid='pesquisa' 
                        value={valorPesquisa} 
                        placeholder="Pesquisar" 
                        type='search' 
                        onChange={(event) => setPesquisa(event.target.value)}
                    />
                    <Link 
                        to={{
                                pathname: '/items',
                                search: `search=${valorPesquisa}`
                            }}
                    >
                        <BotaoPesquisa 
                            data-testid='botao' 
                            type='submit' 
                            onClick={() => {
                                setPesquisa('');
                            }}>
                        <Lupa 
                            src={lupa} 
                        />
                        </BotaoPesquisa>
                    </Link>
                </Formulario>
            </CaixaPesquisa>
        </Cabecalho>
    );
};

export default Header;