const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

//connection to MySql
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});


module.exports = connection;


    // connection.destroy();

    // 2
    // const pool = mysql.createPool({
    //     connectionLimit: 10,
    //     host: process.env.HOST,
    //     user: process.env.USER,
    //     password: process.env.PASSWORD,
    //     database: process.env.DATABASE
    //     });