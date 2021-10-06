const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db");

class Menu_Type extends Model { }

Menu_Type.init({
    menu_type: {
        type: DataTypes.ENUM,
        values: ['comida', 'bebida', 'postre'],
        defaultValue: "comida",
    }
}, {
    sequelize,
    timestamps: false,
    modelName: 'Menus_Type'
});

module.exports = Menu_Type;