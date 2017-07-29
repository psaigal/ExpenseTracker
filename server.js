var express = require('express');
var app = express();
var port = 8888;

app.get('/', function (req, res, next) {
 res.sendFile( __dirname + '/index.html');
});

app.listen(port, '0.0.0.0', function() {
 console.log('Server running at port ' + port);
});