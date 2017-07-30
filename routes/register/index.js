var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); 
var models = require('../../models/index');
var bcrypt = require('bcrypt-nodejs');
var User = models.User;
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


router.get('/', function(req, res, next) {
  res.render('register')
});

router.post('/', function (req, res, next) {
	var password = bcrypt.hashSync(req.body.password);
	req.body.password = password;
	User.create(req.body, function (err, small) {
	  if(err) {
		throw err;
		res.json({message: err})
	}
	  else {
	  	res.send(small);
	  }
	})
});

module.exports = router;
