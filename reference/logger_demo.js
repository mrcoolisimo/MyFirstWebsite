const EventEmitter = require('events');
const uuid = require('uuid');

//Generate random ID
//console.log(uuid.v4());

class Logger extends EventEmitter {
    log(msg) {
        //Call Event
        this.emit('message', {id: uuid.v4(), msg});

    }
}

module.exports = Logger;