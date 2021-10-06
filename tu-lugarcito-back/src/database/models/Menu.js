const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db");

class Menu extends Model { }

Menu.init({
    photo:{
        type:DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize,
    timestamps: false,
    modelName: 'Menus'
});

module.exports = Menu;
