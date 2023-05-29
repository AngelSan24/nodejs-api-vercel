const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

app.listen(port);

app.use('/', (req, res) => {
    res.send('Hola desde el servidor!');
});

console.log(`Servidor en puerto ${port}`);