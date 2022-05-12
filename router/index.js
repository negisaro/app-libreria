const express = require('express');
const inicio = require('./route.inicio');

function routeApi(app) {
  const route = express.Router();
  app.use('/api/v1', route);
  route.use('/inicio', inicio);
}

module.exports = routeApi;
