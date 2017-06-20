// Create a website with four routes:
//         Home
//         Favorite Food
//         Favorite Movies
//         Favorite CSS Frameworks
//     Each route should be triggered by a different URL.
//     Each route should display an HTML page listing your favorite three things of each.
//     Be sure to use fs to serve your HTML files.


var url = require('url');
var http = require('http');
var fs = require('fs');

var PORT = 8080;

var server = http.createServer(handleRequest);
server.listen(PORT, function(){
	console.log("server", "port", PORT);
})

function handleRequest(req, res) {
	var urlParts = url.parse(req.url);
	var path = urlParts.pathname;
	console.log(path);
	switch (path) {
		case ('/food'):
			fs.readFile(__dirname + "/food.html", function(err, data){
				res.writeHead(200, {'Content-Type':'text/html'});
				res.end(data);
			});
		case ('/movie'):
			fs.readFile(__dirname + "/movie.html", function(err, data){
				res.writeHead(200, {'Content-Type':'text/html'});
				res.end(data);
			});
		case ('/css'):
			fs.readFile(__dirname + "/css.html", function(err, data){
				res.writeHead(200, {'Content-Type':'text/html'});
				res.end(data);
			});
			break;
		default:
			fs.readFile(__dirname + "/home.html", function(err, data){
				res.writeHead(200, {'Content-Type':'text/html'});
				res.end(data);
			});
	}
}
