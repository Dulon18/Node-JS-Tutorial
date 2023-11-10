var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var eventHandler = function () {
  console.log('I hear a scream!');
}
//Assign the eventhandler to an event:


eventEmitter.on('scream', eventHandler);
eventEmitter.emit('scream');

