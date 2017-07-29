var express = require('express');
var app = express();
var port = 8888;

app.listen(port, '0.0.0.0', function() {
 console.log('Server running at port ' + port);
});

//Mongo Database
var mongoose = require('mongoose'); //Place this on top

/*Database connection - MongoDB*/

//Created from the command earlier. Ensure this is done on the database instance
var username = 'admin';
var password = 'password';

var dbHost = 'localhost';
var dbPort = '27017';
var database = 'database';

var url = 'mongodb://' + username + ':' + password + '@' + dbHost + ':' + dbPort + '/' + database;
console.log('mongodb connection = ' + url);

mongoose.connect(url, function(err) {
    if(err) {
        console.log('connection error: ', err);
    } else {
        console.log('connection successful');
    }
});


app.get('/', function (req, res, next) {
 res.sendFile( __dirname + '/index.html');
});

app.get('/register', function (req, res, next) {
    res.sendFile( __dirname + '/register.html');
});