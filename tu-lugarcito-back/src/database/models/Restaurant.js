const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db");

class Restaurant extends Model { }

Restaurant.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize,
    timestamps: false,
    modelName: 'Restaurants'
});

module.exports = Restaurant;