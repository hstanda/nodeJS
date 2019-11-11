const Joi = require('joi');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const app = express();
// const router = express.Router();

const Users = require('./models/users');
const userObject = new Users();

app.use(bodyParser.json());
app.use(upload.array()); 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./routes'));

// app.post('/api', (request, response) => {
//     var { error } = validateSchema(request.body);
//     if(error) return response.send({ error : error.details[0].message }); 
//     var user_id = request.body.user_id;

//     // var result = userObject.getUser(user_id);
//     // console.log(result);
//     result = {'name' : 'ett'};
//     response.send({ result });
// });



function validateSchema(schemaObject){
    const schema = {
        user_id: Joi.string().required()
    }
    return Joi.validate(schemaObject,schema);
}
app.listen(3000,() => { console.log('Listsining to port 3000'); });
