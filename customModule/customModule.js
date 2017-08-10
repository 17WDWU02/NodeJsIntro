var person = require("./lib/person");

var Richard = new person("Richard");
// var Jim = new person("Jim");

Richard.on('custom', function(){
	console.log(`Hello ${this.name}`)
})

Richard.emit('custom');