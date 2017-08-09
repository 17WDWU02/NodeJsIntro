var fs = require('fs');

fs.readFile("./lib/readme.txt","UTF-8", function(error, text){
	if(error){
		console.log("error");
	}
	console.log(text);
});