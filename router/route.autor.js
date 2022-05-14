const express = require('express');
const router = express.Router();
const autorService = require('../service/service.autor');
const {
  updateAutorSchema,
  createAutorSchema,
  getAutorSchema,
} = require('../schemas/autor.schema');

const service = new autorService();

router.get('/', async (req, res, next) => {
  try {
    const autor = await service.find();
    res.json(autor);
  } catch (error) {
    next(error);
  }
});

/* router.get(
  '/:id',
  validatorHandler(getAutorSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createAutorSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getAutorSchema, 'params'),
  validatorHandler(updateAutorSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getAutorSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
); */

module.exports = router;
