const { User, UserSchema } = require('./model.user');
const { Customer, CustomerSchema } = require('./model.customer');
const { Autor, AutorSchema } = require('./model.autor');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Autor.init(AutorSchema, Autor.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models); //relaciones con otros tablas
}

module.exports = setupModels;
