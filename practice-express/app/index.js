const express = require('express');
const routes = express.Router();

routes.post('/getUser', (request, response)=>{
    console.log('getUser in routes');
    response.send("Get user in app contorller");
});

routes.post('/postUser', (request, response)=>{
    console.log('postUser in routes');
    response.send("post user in app contorller");
});

routes.post('/', (request, response)=>{
    response.send("Welcome to API controller");
});
module.exports = routes;