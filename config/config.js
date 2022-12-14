// Set sequilize variable
const Sequelize = require('sequelize');

require('dotenv').config();

// Creates sequelize connection for DB
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3301
    });
    

module.exports = sequelize;
