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
      models.Business_Type.belongsTo(models.Estate, {
        foreingKey: {
          allowNull: false,
        },
      });
    }
  };
  Business_Type.init({
    offer:{
      type:DataTypes.ENUM,
      values: ["alquiler", "venta"],
      defaultValue: "venta",
    },
    estate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Estates",
        key: "id",
      },
    }
  }, {
    sequelize,
    modelName: 'Business_Type',
  });
  return Business_Type;
};