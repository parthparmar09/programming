const mysql = require("mysql2/promise");
require("dotenv").config();
const conn = mysql.createPool({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  // password : process.env.DB_PWD,
  database: process.env.DB_DB,

  decimalNumbers: true,
});

module.exports = conn;
