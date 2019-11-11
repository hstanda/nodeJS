const mysql = require('mysql')
const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'study_nodejs'
        });
module.exports = connection;