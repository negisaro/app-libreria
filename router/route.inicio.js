const express = require('express');
const route = express.Router();
const service = require('./../service/service.inicio');

route.get('/', async (req, res, next) => {
  try {
    const users = await service.inicio();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

module.exports = route;
