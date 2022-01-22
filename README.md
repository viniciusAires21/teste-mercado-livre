![](/src/Assets/Logo_ML@2x.png.png.png)
# Teste Front-end Mercado Livre
<p align="center">SPA (single page application) de pesquisa e resultado de produtos do mercado livre</p>

# Indice
<!--ts-->
   * [Tecnologias](#tecnologias)
   * [Instalação](#instalação)
   * [Execução](#execução)
   * [Tests](#testes) 
<!--te-->

## Tecnologias
**Servidor - Back-end for Front-end** 
- express: 
    Framework para Node.js que fornece recursos para construção de servidores web. 
    Usado para criar uma API e gerenciar as diferentes 
    requisições HTTP. 
- body-parser: 
    Biblioteca usada para formatação dos dados, no caso em JSON.
- axios: 
    Biblioteca usada para realizar as requisições HTTP para API do 
    mercado livre e coletar os dados necessários.
- cors:
    Biblioteca de segurança nas requisitados dos dados
    do servidor, pelo cliente. Para não haver bloqueios nas requisições.

**Cliente**
- react: 
    Biblioteca usada para criar aplicações web, com melhor manipulamento da árvore 
    do DOM. Além da complexibilidade de renderização dos elementos, ótima biblioteca 
    para criação de SPA. 
- react-router-dom:
    Biblioteca utilizada para rotear as rotas, tornando-se 
    assim uma single page application.
- styled-components:
    Biblioteca que possibilita contruir o código CSS dentro do próprio arquivo .js ou .jsx, misturando o JavaScript com CSS.
- testing-library/react:
    Biblioteca usada para realização de testes de aplicações React.

## Instalação 
Para começar é necessário ter instalado na máquina o [Node.js] que pode ser baixado aqui (https://nodejs.org/en/).
Clone o repositório, é preciso ter [Git] instalado (https://git-scm.com/).

## Execução
```bash
#clonar repositório
$ git clone https://github.com/viniciusAires21/teste-mercado-livre

#se não estiver, vá para a pasta de execução
$ cd .\teste-mercado-livre-master\

#instalando as dependecias
$ npm install

#iniciando o beck-end for front-end
$ node .\server\index.js

#iniciando a aplicação react
$ npm start

#a aplicação começará a rodar na porta: 3000 - acesse <http://localhost:3000>
```

## Testes
Para rodar os testes é necessário executar:

```bash
#na pasta .\teste-mercado-livre-master\
$ npm test 
```
