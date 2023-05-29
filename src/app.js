const express = require("express"); // Requerir modulo

const app = express(); // Iniciar app

app.use('/', (req, res) => {
    res.send('<table><tr>ASD</tr></table>.');
});

module.exports = app;