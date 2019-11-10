// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('EventHapen', (data) => {
//     console.log('EventHapen called on event raise');
//     console.log('id : ' + data.id + ' URL : '+ data.url );
// });
// logger.log("Meesage from app.js");



const http = require('http'); 
// const server =  http.createServer();
const server =  http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('hello new server');
        res.end();
    }
    if(req.url === '/api'){
        res.write('hello API URL');
        res.end();
    }
});

server.on('connection', () => {
    console.log('New connection made');
});
server.listen(3000);
console.log('listsining to port 3000');