const axios = require('axios');

const baseUrl = axios.create({
    baseURL: 'https://api.mercadolibre.com/'
})

module.exports = {
    async pegarLista(query) {
        const dadosItems = await baseUrl.get(`sites/MLA/search?q=${query}`)
        const resItems = dadosItems.data.results
        
        const dadosCategoria = await baseUrl.get(`categories/${resItems[0].category_id}`)
        const resCategorias = dadosCategoria.data.path_from_root;
        
        const categorias = [];
        const items = [];
        
        for(let i = 0; i <= 3; i++) {
            const item = {
                'id': resItems[i].id,
                'title': resItems[i].title,
                'price': {
                    'currency': resItems[i].currency_id,
                    'amount': resItems[i].price,
                    'decimals': resItems[i].prices.amount
                },
                'pictures': resItems[i].thumbnail,
                'condition': resItems[i].condition,
                'free_shipping': resItems[i].shipping.free_shipping,
                'location': resItems[i].address.state_name
            }
            
            if(i < resCategorias.length){
                categorias.push(resCategorias[i].name)
            }
            
            items.push(item)
        }

        const lista = {
            'author': {
                'name': 'Vinícius',
                'lastname': 'Aires'
            },
            'categorias': categorias,
            'items': items
        }

        return lista
    }
}