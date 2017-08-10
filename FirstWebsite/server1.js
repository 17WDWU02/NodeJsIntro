var http = require("http");

var server = http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.end("Hello World, I am running on a server");
});

server.listen(3000);

console.log("The server is running on port 3000");