var express = require('express');
var app = express();
var port = 8888;
var db = require ('./db');
var mongoose = require('mongoose'); 
var models = require('./models/index');
var bodyParser = require('body-parser');
var routes = require('./routes');
var path = require('path');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(passport.initialize());
app.use(passport.session());

/*Body parser*/
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());
app.use(bodyParser());
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}));

app.use('/', routes);

app.listen(port, '0.0.0.0', function() {
 console.log('Server running at port ' + port);
});

