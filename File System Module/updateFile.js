var http = require('http');

var fs = require('fs');
var server = http.createServer(function (req, res) {
  
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
});

server.listen(5500);

