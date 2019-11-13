//Pull the 'events' module using "require" and calls it "EventEmitter"
const EventEmitter69 = require('events');

//create class from module
class MyEmitter extends EventEmitter69 {}

//Init object of class
const theEmitter = new MyEmitter();

//This is what the event does.  (yourObject).on('nameThisEvent', FUNCTION)
theEmitter.on('event69',  () => console.log('Event Fired!'));

//Calls the event
theEmitter.emit('event69');