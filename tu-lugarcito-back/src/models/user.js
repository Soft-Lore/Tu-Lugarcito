'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role), {
        foreignKey: 'idRole'
      };
    }
  };
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    code: DataTypes.STRING,
    verified: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    fkRole: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: "users",
    modelName: 'User',
  });
  return User;
};