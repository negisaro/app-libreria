const { User, UserSchema } = require('./model.user');
const { Autor, AutorSchema } = require('./model.autor');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Autor.init(AutorSchema, Autor.config(sequelize));
}

module.exports = setupModels;
