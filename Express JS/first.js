var express = require('express');
var app =express();

app.use(function(req,res,middle){
  console.log('middleware');
}):

app.get('/', function (req, res)
{
res.send('Home Page');
});
