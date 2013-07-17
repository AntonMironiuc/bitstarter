var express = require('express');
var fs = require('fs');

var home = fs.readFileSync("index.html", "utf-8");


var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  response.send(home);
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
