var mongoose = require('mongoose'); 

/*Database connection - MongoDB*/

//Created from the command earlier. Ensure this is done on the database instance
var username = 'admin';
var password = 'password';

var dbHost = 'localhost';
var dbPort = '27017';
var database = 'database';

var url = 'mongodb://' + username + ':' + password + '@' + dbHost + ':' + dbPort + '/' + database;
console.log('mongodb connection = ' + url);

var db = mongoose.connect(url, function(err) {
    if(err) {
        console.log('connection error: ', err);
    } else {
        console.log('connection successful');
    }
});

module.exports = db;