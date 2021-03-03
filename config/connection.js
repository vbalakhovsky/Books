// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL

// Dependencies
const Connection = require('mysql2/typings/mysql/lib/Connection');
const Sequelize = require('sequelize');
const sequelize = require('../models');

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
const sequelize = new Sequelize('codeWorms_db', 'root', '', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});
};

// Exports the connection for other files to use
module.exports = sequelize;
