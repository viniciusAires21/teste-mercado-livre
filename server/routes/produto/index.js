const route = require('express').Router({ mergeParams: true });
const { pegarProduto } = require('./ProdutoController');

route.options('/', (req, res) => {
    res.set('Access-Control-Allow-Methods', 'GET')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.status(204)
    res.end()
})

route.get('/', (req, res) => {
    const id = req.params.id;
    const dados = pegarProduto(id)
    dados
        .then(resposta => res.send(resposta))
        .catch(erro => console.log(erro))
})

module.exports = route;
