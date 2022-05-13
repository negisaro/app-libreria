const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().min(3).max(15);
const apellido = Joi.string().min(3).max(15);
const email = Joi.string().email();
const password = Joi.string().min(8);

const createAutorSchema = Joi.object({
  nombre: nombre.required(),
  apellido: apellido.required(),
  email: email.required(),
  password: password.required(),
});

const updateAutorSchema = Joi.object({
  nombre: nombre,
  apellido: apellido,
  email: email,
  password: password,
});

const getAutorSchema = Joi.object({
  id: id.required(),
});

/* const queryProductSchema = Joi.object({
  limit,
  offset,
  price,
  price_min,
  price_max: Joi.alternatives().conditional('price_min', {
    is: Joi.number(),
    then: Joi.required(),
  })
}); */

module.exports = { createAutorSchema, updateAutorSchema, getAutorSchema };
