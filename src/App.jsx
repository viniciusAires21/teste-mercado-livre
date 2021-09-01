import React from 'react'
import Header from "./Components/Cabeçalho/Navegacao";
import { GlobalStyle } from "./Components/GlobalStyle";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageListaProdutos from './Pages/PageListaProdutos';
import PageProduto from './Pages/PageProduto';

function App() {

  return (
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/' />
          <Route exact path='/:produto' component={PageListaProdutos} />
          <Route exact path='/items/:id' component={PageProduto} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
