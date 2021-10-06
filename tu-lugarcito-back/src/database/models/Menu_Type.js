const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db");

class Menu_Type extends Model { }

Menu_Type.init({
    menu: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['desayuno', 'almuerzo', 'cena', 'bebida', 'postre'],
    }
}, {
    sequelize,
    timestamps: false,
    modelName: 'Menus_Type'
});

module.exports = Menu_Type;