const app = require('express')();

app.get('/produtos', (req, res) => res.send('Oi produtos API'));

app.listen(3002, () => console.log(`Produtos API listening on port 3002!`));