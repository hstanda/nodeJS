const Joi = require('joi');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const app = express();

app.use(bodyParser.json());
app.use(upload.array()); 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api', (request, response) => {
    var { error } = validateSchema(request.body);
    if(error) return response.send({ error : error.details[0].message }); 

    var name = request.body.name; 
    var age = request.body.age;
    response.send({ name: name, age : age});
});
function validateSchema(schemaObject){
    const schema = {
        name: Joi.string().min(4).required(),
        age: Joi.string().required()
    }
    return Joi.validate(schemaObject,schema);
}
app.listen(3000,() => { console.log('Listsining to port 3000'); });