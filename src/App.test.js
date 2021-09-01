import React from 'react';
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('Componentes', () => {
    describe('Aplicação iniciada', () => {
        test('barra de pesquisa é exibida', () => {
            render(<App />)
            expect(screen.getByTestId('pesquisa')).toBeInTheDocument()
        })
    
        test('botão submit é exibido', () => {
            render(<App />)
            expect(screen.getByTestId('botao')).toBeInTheDocument()
        })
    })
})

describe('Execução', () => {
    describe('Pesquisando produtos', () => {
        test('Container de Produtos é exibido', () => {
            render(<App />)

            const barraPesquisa = screen.getByTestId('pesquisa')
            const botaoPesquisa = screen.getByTestId('botao')

            fireEvent.change(barraPesquisa, { target: { value: 'ipad' }})
            fireEvent.click(botaoPesquisa)
            expect(screen.getByTestId('container-produtos')).toBeInTheDocument();
        })
    })
    
})