"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const bcrypt = require("bcrypt");
const database_1 = require("./../config/database"); // Set up Sequelize instance
class User extends sequelize_1.Model {
    isValidPassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'users',
    sequelize: database_1.sequelize,
    modelName: 'User',
    hooks: {
        beforeCreate: (user) => {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
        }
    }
});
