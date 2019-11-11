const connection = require('./db_connection');

class Users {
    getUser(user_id, result){
        connection.query('SELECT * from users where user_id = '+ user_id, (err, rows) => {
            if (err){  
                console.log(err);
            }else{
                result = rows[0];
            }
        });
        console.log(result);
        console.log('Out of connection');
    }
}
module.exports = Users;