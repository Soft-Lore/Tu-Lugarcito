const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db");

class Home_Type extends Model { }

Home_Type.init({
    type_of_rental: {
        type: DataTypes.ENUM,
        values: ["Solo habitacion", "Casa","Departamento"],
        defaultValue: "Casa",
      },
},{
    sequelize,
    modelName:"Home_Type",
    timestamps:false
});

module.exports = Home_Type;