var events = require("events");

var emitter = new events.EventEmitter();

emitter.on('CustomEvent', function(message){
	console.log(`\n\n\n\n\n ${message} \n\n\n\n\n`);
})

emitter.emit('CustomEvent', "This is a custom Event passed through function");
emitter.emit('CustomEvent', "This is a second event");