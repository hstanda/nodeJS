
const EventEmmiter = require('events');
var url = "https://google.com";
class Logger extends EventEmmiter{
    log(message){
        console.log('Printed in logger.js : ' + message);
        this.emit('EventHapen', {id: 1, url: url});
    }
}
module.exports = Logger;