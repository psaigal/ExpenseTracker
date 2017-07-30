var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose'); 
var models = require('../../models/index');
var User = models.User;
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

router.get('/', function(req, res, next) {
  res.render('login')
});

router.post('/', passport.authenticate('local'), function (req, res, next) {
	console.log(req.body);
	res.redirect("home");
});

passport.use(new LocalStrategy(
	{usernameField: "email", passwordField: "password"},
    function(username, password, done) {
    	console.log(username);
        User.findOne({ email: username }, function (err, user) {
        	console.log(user);
            if(user !== null) {
            	console.log("12345");
            	console.log(user);
                var isPasswordCorrect = bcrypt.compareSync(password, user.password);
                console.log(isPasswordCorrect);
                if(isPasswordCorrect) {
                    console.log("Email and password correct!");
                    return done(null, user);
                } else {
                    console.log("Password incorrect!");
                    return done(null, false);
                }
           } else {
               console.log("Email does not exist!");
               return done(null, false);
           }
       });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(err, user);
});

module.exports = router;
