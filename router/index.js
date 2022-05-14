const express = require('express');
const user = require('./route.user');
const autor = require('./route.autor');

function routeApi(app) {
  const route = express.Router();
  app.use('/api/v1', route);
  route.use('/users', user);
  route.use('/autores', autor);
}

module.exports = routeApi;
