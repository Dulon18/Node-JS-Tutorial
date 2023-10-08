A Node.js application consists of the following three essential components −

1. Import required modules − We use the require directive to load Node.js modules.
2. Create server − A server that will listen to client's requests similar to Apache HTTP Server.
3. Read request and return response − The server created in an earlier step will read the HTTP request made by the client which can be a browser or a console and return the response.

## Creating Node.js Application

Step 1: Import Required Module 

 Example:  var http = require("http"); 

Step 2: Create Server

Example:  var server = http.createServer(function (req, res) {
     res.end('Hello world..');
});
Server.listen(4040);

Created http instance and call http.createServer() method to create a server instance and then add a port 4040 using the listen method associated with the server instance. Pass it a function with parameters request and response. Write the sample implementation to always return "Hello World".


Now execute the file( main.js) to start the server as follows command − $ node main.js 
