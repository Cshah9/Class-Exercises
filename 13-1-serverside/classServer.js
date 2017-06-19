// require the http node package
var http = require('http');

// define prot that the server will run on; usually its 80
var PORT = 8080;

//function that returns the url that was sent in the request
function handleRequest(request, response) {
	response.end("It Works!! Path Hit: " + request.url);
}

//create server that runs our function
var server = http.createServer(handleRequest);

//tell server what part to use
server.listen(PORT, function(){
	console.log("Server listening on: http://location:%s", PORT);
});