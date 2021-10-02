const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db");

class Business_Type extends Model { }

Business_Type.init({
    type_offer: {
        type: DataTypes.ENUM,
        values: ["alquiler", "venta"],
        defaultValue: "venta",
    },
}, {
    sequelize,
    modelName: "Business_Types",
    timestamps: false
})

module.exports = Business_Type;