var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  
fs.appendFile('mynewfile.txt', 'Hello ..from new File!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
});
server.listen(5500);
