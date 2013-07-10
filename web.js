var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var ToBuffer= fs.readFileSync('index.html','utf-8');
var strContent =ToBuffer.toString();

app.get('/', function(request, response) {
  response.send(strContent);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
