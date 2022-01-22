const route = require('express').Router({ mergeParams: true });
const { pegarLista } = require('./ListaController');

route.options('/', (req, res) => {
    res.set('Access-Control-Allow-Methods', 'GET')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.status(204)
    res.end()
})

route.get('/', (req, res) => {
    const pesquisa = req.query;
    const dados = pegarLista(`${pesquisa.q}`)
    dados
        .then(resposta => res.send(resposta))
        .catch(erro => console.log(erro))
})

module.exports = route;