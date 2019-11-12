const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
const port = 3000;

const {
    USUARIOS_API_URL,
    PRODUTOS_API_URL,
} = require('./URLs');

const usuarioServiceProxy = httpProxy(USUARIOS_API_URL);
const produtosServiceProxy = httpProxy(PRODUTOS_API_URL);

app.get('/', (req, res) => res.send('Oi Gateway API'));

app.get('/usuarios', (req, res, next) => usuarioServiceProxy(req, res, next));
app.get('/produtos', (req, res, next) => produtosServiceProxy(req, res, next));

app.listen(port, () => console.log(`Exemplo gateway api listening on port ${port}!`));