var http = require("http");

var server = http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type':'text/html'});
	response.end(`
			<html>
				<head>
					<title>First Served website</title>
				</head>
				<body>
					<h1>This is the server running</h1>
					<p>${request.url}</p>
					<p>${request.method}</p>
				</body>
			</html>
		`);
});

server.listen(3000);

console.log("The server is running on port 3000");