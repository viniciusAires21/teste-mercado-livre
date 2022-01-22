const axios = require('axios');

const api = axios.create({
    baseURL: 'https://api.mercadolibre.com/sites/MLA/search?q='
})

const apiCategorias = axios.create({
    baseURL: 'https://api.mercadolibre.com/categories/'
})

const apiProduto = axios.create({
    baseURL: 'https://api.mercadolibre.com/items/'
})

const busca = async (url) => {
    const resposta = await api.get(url)
    return(resposta.data.results)  
}

const buscaCategorias = async (url) => {
    const resposta = await apiCategorias.get(url)
    return(resposta.data.path_from_root)
}

const buscaProduto = async (url) => {
    const resposta = await apiProduto.get(url)
    return(resposta.data)
}

module.exports = {
    busca, 
    buscaCategorias,
    buscaProduto
}