'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Business_Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Business_Type.hasmany(models.Estate);
    }
  };
  Business_Type.init({
    type_offer: {
      type: DataTypes.ENUM,
      values: ["alquiler", "venta"],
      defaultValue: "venta",
    }
  }, {
    sequelize,
    modelName: 'Business_Type',
  });
  return Business_Type;
};