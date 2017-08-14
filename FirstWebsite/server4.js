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
	} else if(request.url === "/about"){
		fs.readFile("./public/about.html", "UTF-8", function(error, contents){
			response.writeHead(200, {'Content-Type':'text/html'});
			response.end(contents);
		})
	}else if(request.url.match(/.css$/)){
		var cssPath = path.join(__dirname, 'public', request.url);
		var fileStream = fs.createReadStream(cssPath, "UTF-8");
		response.writeHead(200, {'Content-Type':'text/css'});
		fileStream.pipe(response);
	} else if(request.url.match(/.jpg$/)){
		var imagePath = path.join(__dirname, 'public', request.url);
		var imageStream = fs.createReadStream(imagePath);
		response.writeHead(200, {'Content-Type':'image/jpeg'});
		imageStream.pipe(response);
	}else {
		response.writeHead(404, {'Content-Type': 'text/plain'});
		response.end("404, File not Found");
	}
}).listen(3000);


console.log("The server is running on port 3000");