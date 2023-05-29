const express = require("express"); // Requerir modulo

const app = express(); // Iniciar app

app.use('/', (req, res) => {
    res.send('Hola desde el Servidor.');
});

app.use('/api', (req, res) => {
    res.send('Hola desde la API.');
});

module.exports = app;