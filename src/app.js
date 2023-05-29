const express = require("express"); // Requerir modulo

const app = express(); // Iniciar app

app.use('/', (req, res) => {
    res.send('<table>    <tr>      <th>Company</th>      <th>Contact</th>      <th>Country</th>    </tr>    <tr>      <td>Alfreds Futterkiste</td>      <td>Maria Anders</td>      <td>Germany</td>    </tr>    <tr>      <td>Centro comercial Moctezuma</td>      <td>Francisco Chang</td>      <td>Mexico</td>    </tr>  </table>');
});

module.exports = app;