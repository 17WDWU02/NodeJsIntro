var fs = require('fs');

var append = "This was appended";

fs.appendFile("./lib/write.txt", append, function(error){
	if(error){
		console.log("error");
	} else {
		console.log("content was appended");
	}
})