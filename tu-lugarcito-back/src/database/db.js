const { Sequelize, DataTypes, Model } = require("sequelize");


const sequelize = new Sequelize({
    database: "tu_lugarcito",
    username: "root",
    host: 3306,
    dialect: "mysql",
    logging: false

});

module.exports = {sequelize};
