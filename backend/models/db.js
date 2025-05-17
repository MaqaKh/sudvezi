const mysql = require('mysql2');

const db = mysql.createConnection({
  host: '193.203.168.142',
  user: 'u151991570_root',
  password: 'Sudvezi123@',
  database: 'u151991570_sudvezi',
});

module.exports = db; 