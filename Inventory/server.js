var http = require("http");
var fs = require('fs');
var path = require('path');
var data = require("./data/stock");

http.createServer(function(request, response){
	console.log(`${request.method} request for ${request.url}`);
	if(request.url === "/"){
		fs.readFile("./public/index.html", "UTF-8", function(error, contents){
			response.writeHead(200, {'Content-Type':'text/html'});
			response.end(contents);
		});
	} else if(request.url.match(/.css$/)){
		var cssPath = path.join(__dirname, 'public', request.url);
		var fileStream = fs.createReadStream(cssPath, "UTF-8");
		response.writeHead(200, {'Content-Type':'text/css'});
		fileStream.pipe(response);
	} else if(request.url.match(/.js$/)){
		var jsPath = path.join(__dirname, 'public', request.url);
		var jsStream = fs.createReadStream(jsPath, "UTF-8");
		response.writeHead(200, {'Content-Type':'application/js'});
		jsStream.pipe(response);
	} else if(request.url === "/allProducts"){
		response.writeHead(200, {"Content-Type":"text/json"});
		response.end(JSON.stringify(data));
	} else if(request.url === "/instock"){
		//Show only items which are in stock
		inStock(response);
	} else if(request.url === "/outofstock"){
		//Show only items which are out of stock
		outOfStock(response);
	} else {
		response.writeHead(404, {"Content-Type":"text/plain"});
		response.end("404, There is no Data matching your request");
	}
}).listen(3000);

console.log("Server running on port 3000");

function inStock(response){
	var avail = data.filter(function(item){
		return item.inStock === true;
	});
	response.end(JSON.stringify(avail));
}

function outOfStock(response){
	var notAvail = data.filter(function(item){
		return item.inStock === false;
	});
	response.end(JSON.stringify(notAvail));
}










