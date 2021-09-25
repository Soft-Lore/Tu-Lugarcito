"use strict";
const { Model } = require("sequelize");
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
      models.User.hasmany(models.Home_Type);
      models.User.hasmany(models.Business_Types);
      models.User.hasmany(models.Photos);
    }
  }
  Estate.init(
    {
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
    },
    {
      sequelize,
      modelName: "Estate",
    }
  );
  return Estate;
};
