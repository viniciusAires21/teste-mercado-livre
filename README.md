# Teste Front-end Mercado Livre
<p align="center">SPA (single page application) de pesquisa e resultado de produtos do mercado livre</p>

Indice
=================
<!--ts-->
   * [Tecnologias](#tecnologias)
   * [Instalação](#instalação)
   * [Execução](#execução)
   * [Tests](#testes)
<!--te-->

### Tecnologias
**Servidor - Back-end for Front-end**
- express: 
    Biblioteca usada para criar uma API e gerenciar as diferentes 
    requisições HTTP. Configurar a conexão no server, 
    a porta de conexão, as respostas e as requisições.
- body-parser: 
    Biblioteca usada para formatação dos dados, no caso em JSON.
- axios: 
    Biblioteca usada para realizar as requisições HTTP para API do 
    mercado livre e coletar os dados necessários.
- cors:
    Biblioteca para não ter bloqueios quando forem requisitados os dados
    do servidor, pelo cliente.

**Cliente**
- react: 
    Framework usado para criar aplicações web, com melhor manipulamento da árvore 
    do DOM. Além da complexibilidade de renderização dos elementos, ótimo framework 
    para criação de SPA. 
- react-router-dom:
    Biblioteca utilizada para rotear as rotas e não haver refresh da página, tornando-se 
    assim uma single page application.
- styled-components:
    Biblioteca que possibilita contruir o código CSS dentro do próprio arquivo .js ou .jsx
- testing-library/react:
    Biblioteca usada para realização de testes de aplicações React.

### Instalação 
Para começar é necessário ter instalado na máquina o [Node.js] que pode ser baixado aqui (https://nodejs.org/en/).
Clone o repositório, é preciso ter [Git] instalado (https://git-scm.com/).

### Execução
```bash
#se não estiver, vá para a pasta de execução
$ cd .\teste-mercado-livre\

#instalando as dependecias
$ npm install

#iniciando o beck-end for front-end
$ node .\server\index.js

#iniciando a aplicação react
$ npm start

#a aplicação começará a rodar na porta: 3000 - acesse <http://localhost:3000>
#o server dos dados roda na porta: 4000 
```

### Testes
Para rodar os testes é necessário executar:

```bash
#na pasta .\teste-mercado-livre\
$ npm test 
```

### Problemas
A única parte não realizada da forma que foi especificada no teste, foi o endpoint "/items?search=".
O react-router-dom não reconhece um endpoint de filtragem (search), por conta do ponto de interrogação (?) e 
não consegui resolver o problema para que fosse da forma que foi pedido.
Então para que a aplicação funcionasse, a resposta da pesquisa de algum produto é feita no endpoint "/:produto".
