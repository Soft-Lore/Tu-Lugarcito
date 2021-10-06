const { Model, DataTypes } = require("sequelize");
const bcryptjs = require('bcryptjs')
const { sequelize } = require("../db");
class User extends Model { }

User.init({

    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    activate: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    google: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    verified: {
        type: DataTypes.BOOLEAN
    },
}, {
    sequelize,
    modelName: "Users",
    timestamps: false,
});

User.addHook("beforeCreate", async (user, options, next) => {
    try {
        const salt = await bcryptjs.genSalt(10);
        const hashed_password = await bcryptjs.hash(user.password, salt);
        user.password = hashed_password;
    } catch (error) {
        next(error);
    }
});

User.prototype.toJSON = function () {
    let value = Object.assign({}, this.get());
    delete value.password;
    return value;
};

module.exports = User;