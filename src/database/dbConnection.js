const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB,
    user: 'uxzb6kfhese2dzpm',
    password: process.env.PASSWORD_DB,
    database: 'bhughk2pbz6e6myjf9ur'
});

//mysql://uxzb6kfhese2dzpm:0nm340LIzaPH03ryvnV2@bhughk2pbz6e6myjf9ur-mysql.services.clever-cloud.com:3306/bhughk2pbz6e6myjf9ur

connection.connect(error => {
    if (error) throw new Error(`Error connecting to database: ${error}`);
    console.log('Connected to database');
});

module.exports = connection;