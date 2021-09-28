const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/config.json");
const db = {};

db.connection = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  config.development
);

db.Business_Type = require("../models/business_type")(db.connection, DataTypes);
db.Home_Type = require("../models/home_type")(db.connection, DataTypes);
db.Photos = require("../models/photo")(db.connection, DataTypes);
db.Estate = require("../models/estate")(db.connection, DataTypes);
db.User = require("../models/user")(db.connection, DataTypes);
db.Role = require("../models/role")(db.connection, DataTypes);

module.exports = db;