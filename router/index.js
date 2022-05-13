const express = require('express');
const inicio = require('./route.user');

function routeApi(app) {
  const route = express.Router();
  app.use('/api/v1', route);
  route.use('/users', inicio);
}

module.exports = routeApi;
