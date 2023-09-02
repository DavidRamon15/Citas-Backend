import sql from 'mssql'
import config from '../config'


const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: config.dbServer,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbDatabase
});

export const manageError = (error) => {
    console.log(error.message)
    res.status(500);
    res.send("An error happened");
}

module.exports = { connection };

export { sql }
