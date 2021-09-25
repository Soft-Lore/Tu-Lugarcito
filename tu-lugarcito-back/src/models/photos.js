'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Photos.belongsTo(models.Estate, {
        foreingKey: {
          allowNull: false,
        },
      });
    }
  };
  Photos.init({
    cover_page: DataTypes.STRING,
    images: DataTypes.STRING,
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
    modelName: 'Photos',
  });
  return Photos;
};