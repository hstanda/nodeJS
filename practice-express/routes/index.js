const express = require('express');
const routes = express.Router();

routes.use('/app', require('./../app'));

routes.post('/login', (request, response)=>{
    response.send("Login method in file index.js");
});
module.exports = routes