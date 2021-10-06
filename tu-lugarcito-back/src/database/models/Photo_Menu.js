const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db");

class Photo_Menu extends Model { }

Photo_Menu.init({
    cover_page: {
        type: DataTypes.STRING
    },
    images: {
        type: DataTypes.STRING
    },
}, {
    timestamps: true,
    sequelize,
    modelName: "Photos_Menus"
}, {
    sequelize,
    timestamps: false,
    modelName: 'Photos_Menus'
});

module.exports = Photo_Menu;