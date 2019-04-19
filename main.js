var events = require('events');
var eventEmitter = new events.EventEmitter();


var listener1 = function listener1(){
        console.log("listener1 excuted");
}

var listener2 = function listener2(){
    console.log("listener2 excuted");
}
eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection',listener2);

var eventListeners= require('events').EventEmitter.listenerCount(eventEmitter,'connection');

console.log(eventListeners + " Listner(s) listening to connection event");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listener1);
console.log("Listner1 will not listen now.");
eventEmitter.emit('connection');

eventListeners= require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + ' Listner(s) listening to connection event')
// var connectHandler = function connected(){
//     console.log('connection successfull');
//     eventEmitter.emit('data_received')
// }
// eventEmitter.on('connection',connectHandler)


// eventEmitter.on('data_received', function() {
//     console.log('data received succesfully.');
//  });
// eventEmitter.emit('connection');
console.log("program end");