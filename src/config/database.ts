import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('Test', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql', // Change this to your database type if it's not MySQL
  logging: false // Set to true to log SQL queries to the console
});

export { sequelize };
