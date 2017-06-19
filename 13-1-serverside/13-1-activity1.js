//  Using the previous example as a guide, create an app that has two web servers.
//     One that listens on port 7000 and one that listens on port 7500.
//     The one listening on port 7000 will always tell the user something good about themselves.
//     The one listening on 7500 will always tell the user something bad about themselves.
//     Make sure you create a Github repo and commit this code!

// Bonus

//    Look for other ways to expand what your server can do. As possibilities:
//         Generate the good/bad phrase randomly from a list of predefined phrases
//         Use the twitter package inside the response to also return a random tweet

// function handleRequest(request, response) {
// 	response.end("It Works!! Path Hit: " + request.url);
// }

// //create server that runs our function
// var server = http.createServer(handleRequest);

// //tell server what part to use
// server.listen(PORT, function(){
// 	console.log("Server listening on: http://location:%s", PORT);
// });

var http = require('http');
var PORT1 = 7000;
var PORT2 = 7500;



function goodFeedback(request, response) {
	response.end("You look wonderful today!");
}
function badResponse(request, response) {
	response.end("You're not looking too good.");
}

var server1 = http.createServer(goodFeedback);

server1.listen(PORT1, function(){
	console.log("Server1 listening on: http://localhost:%s", PORT1);
});


var server2 = http.createServer(badResponse);

server2.listen(PORT2, function(){
	console.log("Server2 started on http://localhost:%s", PORT2);
});










































