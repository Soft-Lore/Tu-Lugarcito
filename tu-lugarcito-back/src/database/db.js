const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/config.json");
const db = {};

db.connection = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  config.development
);

db.User = require("../models/user")(db.connection, DataTypes);
db.Role = require("../models/role")(db.connection, DataTypes);

module.exports = db;