const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'Vargas',
  password: 'Vargas2001', 
  database: 'taskwise',          
  port: 3306
});

module.exports = { pool };