//Required npm packages
const mysql = require('mysql2');
require('dotenv').config();

//Hide username and password
const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})
connection.connect(error => {
    if (error) {
        throw error; 
    }
})

module.exports = connection; 