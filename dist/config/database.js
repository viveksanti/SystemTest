"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('Test', 'root', 'Vivek@123', {
    host: 'localhost',
    dialect: 'mysql', // Change this to your database type if it's not MySQL
    logging: false // Set to true to log SQL queries to the console
});
exports.sequelize = sequelize;
