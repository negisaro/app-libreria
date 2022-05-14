const { Model, DataTypes, Sequelize } = require('sequelize');

const AUTOR_TABLE = 'autor';

const AutorSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  apellido:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Autor extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: AUTOR_TABLE,
      modelName: 'Autor',
      timestamps: false,
    };
  }
}

module.exports = { AUTOR_TABLE, AutorSchema, Autor };
