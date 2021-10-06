const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db");

class Photo extends Model { }

Photo.init({
    cover_page: {
        type: DataTypes.STRING
    },
    images: {
        type: DataTypes.STRING
    },
}, {
    timestamps: true,
    sequelize,
    modelName: "Photos"
});

module.exports =  Photo;