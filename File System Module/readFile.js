var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
  fs.readFile('demo.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
})
server.listen(5500); 
