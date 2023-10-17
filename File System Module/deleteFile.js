var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  
fs.unlink('demo.txt', function (err) {
  if (err) throw err;
  console.log('Deleted!');
});
  
});

server.listen(5500);
