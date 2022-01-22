import React from 'react'
import Header from "./Components/Cabeçalho/Navegacao";
import { GlobalStyle } from "./Components/GlobalStyle";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageListaProdutos from './Pages/PageListaProdutos';
import PageProduto from './Pages/PageProduto';

function App() {

  return (
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route
            path={'/:produto'} 
            element={<PageListaProdutos />} 
          />
          <Route 
            exact 
            path='/items/:id' 
            element={<PageProduto />} 
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
