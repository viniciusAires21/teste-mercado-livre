const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(bodyParser.json());

const routeLista = require('./routes/lista-produtos')
app.use('/api/items', routeLista);

const routeProduto = require('./routes/produto')
app.use('/api/items/:id', routeProduto)

app.listen(4000, (() => console.log('API funcionando')))