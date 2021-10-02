const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db");

class Estate extends Model { }

Estate.init({
    price: {
        type: DataTypes.DECIMAL                     
    },
    bedrooms: {
        type: DataTypes.INTEGER
    },
    bathrooms: {
        type: DataTypes.INTEGER
    },
    backyar: {
        type: DataTypes.BOOLEAN
    },
    garage: {
        type: DataTypes.BOOLEAN
    },
    sold: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    address: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
}, {
    sequelize,
    modelName: "Estates",
    timestamps: true
})

module.exports = Estate;