var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); 
var models = require('../../models/index')

router.get('/', function(req, res, next) {
  res.render('register')
});

router.post('/', function (req, res, next) {
	console.log(req.body);
	models.User.create(req.body, function (err, small) {
	  if(err) {
		throw err;
		reject();
	}
	  else {
	  	res.send(small);
	  }
	})
});

module.exports = router;
