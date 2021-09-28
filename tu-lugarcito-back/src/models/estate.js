'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Estate.belongsTo(models.User, {
        foreingKey: {
          allowNull: false,
        },
      });
      models.Estate.belongsTo(models.Home_Type, {
        foreingKey: {
          allowNull: false,
        },
      });
      models.Estate.belongsTo(models.Business_Type, {
        foreingKey: {
          allowNull: false,
        },
      });

      models.Estate.hasmany(models.Photo);

    }
  };
  Estate.init({
    price: DataTypes.INTEGER,
    bedrooms: DataTypes.INTEGER,
    bathrooms: DataTypes.INTEGER,
    backyar: DataTypes.BOOLEAN,
    garage: DataTypes.BOOLEAN,
    address: DataTypes.STRING,
    description: DataTypes.TEXT,
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
    },
    id_home:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Home_Types",
        key: "id",
      },
    },
    id_business:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Business_Types",
        key: "id",
      },
    }
  }, {
    sequelize,
    modelName: 'Estate',
  });
  return Estate;
};