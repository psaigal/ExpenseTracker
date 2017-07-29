var express = require('express');
var app = express();
var port = 8888;
var db = require ('./db');
var mongoose = require('mongoose'); 
var models = require('./models/index')
var bodyParser = require('body-parser');
var routes = require('./routes');
var path = require('path');

/*Body parser*/
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', routes);

app.listen(port, '0.0.0.0', function() {
 console.log('Server running at port ' + port);
});


app.set('views', path.join(__dirname, '/views'));



app.use(express.static(path.join(__dirname, 'views')));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');



// app.get('/register', function (req, res, next) {
//     res.sendFile( __dirname + '/register.html');
// });

// app.post('/register', function (req, res, next) {
// 	console.log(req.body);
//     console.log('firstname = ' + req.body.firstname);
//     console.log('lastname = ' + req.body.lastname);
//     console.log('email = ' + req.body.email);
//     console.log('password = ' + req.body.password);
// });