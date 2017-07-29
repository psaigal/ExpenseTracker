var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); 
var models = require('../../models/index')

router.get('/', function(req, res, next) {
  res.render('index')
});

router.post('/', function (req, res, next) {
	console.log(req.body);
	models.User.findOne(req.body, function (err, person) {
		if(err || person === null) {
			throw err;
		}
		else {
			console.log(person); // Space Ghost is a talk show host.
		}
	})
});

module.exports = router;
