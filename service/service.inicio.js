const express = require('express');
const route = express.Router();

function inicio() {
  route.get('/', (req, res) => {
    res.send('si señor asi es');
  });
}

module.exports = inicio;
