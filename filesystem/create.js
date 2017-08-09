var fs = require('fs');

var content = `

This file was created using node js

`;

fs.writeFile("./lib/write.txt", content, function(error){
	if(error){
		console.log("error");
	} else {
		console.log("file Created");
	}
})