var http = require("http");
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(request, response){
	console.log(`${request.method} request for ${request.url}`);
	if(request.url === "/"){
		fs.readFile("./public/index.html", "UTF-8", function(error, contents){
			response.writeHead(200, {'Content-Type':'text/html'});
			response.end(contents);
		})
	} else {
		response.writeHead(404, {'Content-Type': 'text/plain'});
		response.end("404, File not Found");
	}
}).listen(3000);


console.log("The server is running on port 3000");