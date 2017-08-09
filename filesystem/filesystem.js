var fs = require('fs');

// fs.readdir('./', function(error, files){
// 	if(error){
// 		console.log("there is an error");
// 	}
// 	console.log(files);
// });
var files = fs.readdirSync('./');
console.log(files);

console.log("Reading Files.....");