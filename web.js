var express = require('express');

var app = express.createServer(express.logger());

// app.get('/', function(request, response) {
//  response.send('Hello World 2!');
//});

var content;
// First I want to read the file
var fs = require("fs");
var data = fs.readFileSync("index.html", "utf8");
console.log(data);




var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
