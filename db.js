const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'root',
  user: 'admin',
  password: 't7x?}>rbmCa~we+',
  database: 'wallpaper',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

module.exports = connection;
