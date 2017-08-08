var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("What is your Name?", function(answer){
	console.log(answer);
	rl.setPrompt(`${answer} what is your favourite Colour?`);
	rl.prompt();
	rl.on('line', function(colour){
		console.log(colour);
		rl.close();
	})
})

rl.on('close',function(){
	process.exit();
})