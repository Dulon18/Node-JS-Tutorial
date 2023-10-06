var http = require('http');
var server = http.createServer(function (req, res) {
     res.end('Hello world..');
});

server.listen(4040);
console.log('it is working properly..');
