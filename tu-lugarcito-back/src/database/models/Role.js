const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db");

class Role extends Model { }

Role.init({
    role: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['admin', 'cliente'],
        defaultValue: 'cliente'
    }
}, {
    sequelize,
    modelName: "Roles",
    timestamps: false
});
module.exports = Role;