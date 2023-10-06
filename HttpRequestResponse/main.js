var http = require('http')
var server = http.createServer(function (req, res) {
     if (req.url == '/')
     {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write('<h1>Hello..From Home page</h1>');
          res.end();
     }
     else if(req.url == '/about')
     {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write('<h1>Hello..From about page</h1>');
          res.end();
     }
     else if(req.url == '/project')
     {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write('<h1>Hello..From project page</h1>');
          res.end();
     }
});

server.listen(4040);
console.log('Working perfectly..');
