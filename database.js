const mysql = require("mysql2");
require('dotenv').config();

const database = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT || 3306,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

database.connect((err) => {
    if (err) {
      console.error('MySQL connection failed:', err);
      return;
    }
    console.log('MySQL connected!');
  });

module.exports = database;