const mysql = require("mysql2");

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'thelostboy',
    database: 'schooldb',
});

database.connect((err) => {
    if (err) {
      console.error('MySQL connection failed:', err);
      return;
    }
    console.log('MySQL connected!');
  });

module.exports = database;