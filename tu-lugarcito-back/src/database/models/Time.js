const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../db");

class Time extends Model { }

Time.init({
    start_day: {
        type: DataTypes.STRING,
        defaultValue: "lunes"
    },
    last_day: {
        type: DataTypes.STRING,
        defaultValue: 'sabado'
    },
    start_time: {
        type: DataTypes.TIME,
        defaultValue: '6:00'
    },
    last_time: {
        type: DataTypes.TIME,
        defaultValue: '10:00'
    },
},{
    sequelize,
    timestamps: true,
    modelName: 'Time'
})

module.exports = Time;