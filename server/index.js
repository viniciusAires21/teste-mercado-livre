const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { busca, buscaCategorias, buscaProduto } = require('./service')

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.get(`/api/items`, (req, res) => {
    const query = req.query;
    const resultado = busca(`${query.q}`)
    res.status(200)

    async function dados(){
        try {
            const res = await resultado;
            const categorias = buscaCategorias(res[0].category_id);
            const catg = await categorias;
            
            return {
                'author': {
                    'name': 'Vinicius',
                    'lastname': 'Aires'
                },                
                'categories': [catg[0].name, catg[1].name],
                'items': [
                    {
                    'id': res[0].id,
                    'title': res[0].title,
                    'price': {
                        'currency': res[0].currency_id,
                        'amount': res[0].price,
                        'decimals': res[0].prices.amount
                    },
                    'pictures': res[0].thumbnail,
                    'condition': res[0].condition,
                    'free_shipping': res[0].shipping.free_shipping,
                    'location': res[0].address.state_name
                    },
                    {
                    'id': res[1].id,
                    'title': res[1].title,
                    'price': {
                        'currency': res[1].currency_id,
                        'amount': res[1].price,
                        'decimals': res[1].prices.amount
                    },
                    'pictures': res[1].thumbnail,
                    'condition': res[1].condition,
                    'free_shipping': res[1].shipping.free_shipping,
                    'location': res[1].address.state_name
                    },
                    {
                        'id': res[2].id,
                        'title': res[2].title,
                        'price': {
                            'currency': res[2].currency_id,
                            'amount': res[2].price,
                            'decimals': res[2].prices.amount
                        },
                        'pictures': res[2].thumbnail,
                        'condition': res[2].condition,
                        'free_shipping': res[2].shipping.free_shipping,
                        'location': res[2].address.state_name
                    },
                    {
                        'id': res[3].id,
                        'title': res[3].title,
                        'price': {
                            'currency': res[3].currency_id,
                            'amount': res[3].price,
                            'decimals': res[3].prices.amount
                        },
                        'pictures': res[3].thumbnail,
                        'condition': res[3].condition,
                        'free_shipping': res[3].shipping.free_shipping,
                        'location': res[3].address.state_name
                    }
                ]

            };
        } catch (erro) {
            return console.log(erro);
        }

    }
    
    dados().then(resposta => res.send(
        resposta
        ))
})

app.get('/api/items/:id', (req, res) => {
    const id = req.params.id;
    const resultado = buscaProduto(id);
    const descricao = buscaProduto(`${id}/description`);
    res.status(200)

    async function dados() {
        try{
            const res = await resultado;
            const desc = await descricao;

            return {
                'author': {
                    'name': 'Vinicius',
                    'lastname': 'Aires'
                    },
                    'item': {
                        "id": res.id,
                        "title": res.title,
                        "price": {
                            "currency": res.currency_id,
                            "amount": res.price,
                            "decimals": res.price,
                    },
                    'picture': res.pictures[0].url,
                    'condition': res.condition,
                    'free_shipping': res.shipping.free_shipping,
                    'sold_quantity': res.sold_quantity,
                    'description': desc.plain_text
                    }
                    
            }

        } catch (erro) {
            console.log(erro)
        }
    }

    dados().then(resposta => res.send(
        resposta
    ))
})

app.listen(4000, (() => console.log('API funcionando')))