const mysql = require('mysql');
const { ConnectionString } = require('connection-string');

const cs = new ConnectionString(process.env.JAWSDB_URL);
const { name } = cs.hosts?.[0];

const connection = mysql.createConnection({
    host: name,
    user: 'eh3s574ym8y64dco',
    password: process.env.PASSWORD_DB,
    database: 'lxg4e3fbx5zo5mmw',
});

connection.connect(error => {
    if (error) throw new Error(`Error connecting to database: ${error}`);
    console.log('Connected to database');
});

module.exports = connection;