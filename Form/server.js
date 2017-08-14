var http = require("http");
var fs = require("fs");

http.createServer(function(request, response){
	console.log(`${request.method} request for ${request.url}`);

	if(request.method === "GET"){
		fs.readFile("./public/index.html", "UTF-8", function(error, contents){
			response.writeHead(200, {"content-Type":"text/html"});
			response.end(contents);
		});
	} else if(request.method === "POST"){
		var body = "";
		request.on("data", function(data){
			body += data;
		});
		request.on("end", function(){
			response.writeHead(200, {"content-Type":"text/html"});
			response.end(`
				<html>
					<head>
						<title>Form Submit</title>
					</head>
					<body>
						<h1>Thank you for filling out the form</h1>
						<h3>Here are your results</h3>
						<p>${body}</p>
					</body>
				</html>
				`);
		});
	};
}).listen(3000);

console.log("Server is running on port 3000");