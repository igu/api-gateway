
const app = require('express')();

app.get('/usuarios', (req, res) => res.send('Oi usuarios API'));

app.listen(3001, () => console.log(`Usuarios API listening on port 3001!`));