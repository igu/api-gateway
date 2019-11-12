const app = require('express')();

app.get('/pagamentos', (req, res) => res.send('Oi pagamentos API'));

app.listen(3003, () => console.log(`Pagamentos API listening on port 3003!`));