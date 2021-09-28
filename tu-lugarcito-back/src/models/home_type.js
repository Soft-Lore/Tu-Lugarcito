'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Home_Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Home_Type.hasmany(models.Estate);
    }
  };
  Home_Type.init({
    type_of_rental:{
      type: DataTypes.ENUM,
      values: ["Solo habitacion", "Casa","Departamento"],
      defaultValue: "Casa",
    }
  }, {
    sequelize,
    modelName: 'Home_Type',
  });
  return Home_Type;
};