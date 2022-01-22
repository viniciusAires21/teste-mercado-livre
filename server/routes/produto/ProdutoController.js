const axios = require('axios');

const baseUrl = axios.create({
    baseURL: 'https://api.mercadolibre.com/'
})

module.exports = {
    async pegarProduto(id) {
        const dadosProduto = await baseUrl.get(`/items/${id}`)
        const resProduto = dadosProduto.data 

        const dadosDescricao = await baseUrl.get(`/items/${id}/description`)
        const resDescricao = dadosDescricao.data

        const dados = {
            'author': {
                'name': 'Vinicius',
                'lastname': 'Aires'
            },
                'item': {
                    "id": resProduto.id,
                    "title": resProduto.title,
                    "price": {
                        "currency": resProduto.currency_id,
                        "amount": resProduto.price,
                        "decimals": resProduto.price,
                },
                'picture': resProduto.pictures[0].url,
                'condition': resProduto.condition,
                'free_shipping': resProduto.shipping.free_shipping,
                'sold_quantity': resProduto.sold_quantity,
                'description': resDescricao.plain_text
                }
                
        }

        return dados
        
    }
}