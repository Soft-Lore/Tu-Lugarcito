"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.hasmany(models.Role);
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      activate:{
        type: DataTypes.BOOLEAN,
        defaultValue:true,
      },
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.addHook("beforeCreate", async (user, options, next) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed_password = await bcrypt.hash(user.password, salt);
      user.password = hashed_password;
    } catch (error) {
      next(error);
    }
  });

  User.prototype.toJSON = function() {
    let values = Object.assign({},this.get());
    delete values.password;
    return values;
  }

  return User;
};
