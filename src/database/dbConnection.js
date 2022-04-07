const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'soccer_db'
});

connection.connect(error => {
    if (error) throw new Error(`Error connecting to database: ${error}`);
    console.log('Connected to database');
});

module.exports = connection;