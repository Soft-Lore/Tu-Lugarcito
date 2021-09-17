"use strict";
const { Model } = require("sequelize");
const bcryptjs = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.belongsTo(models.Role, {
        foreingKey: {
          allowNull: false,
        },
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      activate: DataTypes.BOOLEAN,
      verified: DataTypes.BOOLEAN,
      google:{
        type: DataTypes.BOOLEAN,
        defaultValue:false
      },
      roleid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Roles",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.addHook("beforeCreate", async (user, options, next) => {
    try {
      const salt = await bcryptjs.genSalt(10);
      const hashed_password = await bcryptjs.hash(user.password, salt);
      user.password = hashed_password;
    } catch (error) {
      next(error);
    }
  });

  User.prototype.toJSON = function () {
    let value = Object.assign({}, this.get());
    delete value.password;
    return value;
  };
  return User;
};
