var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var User = mongoose.model('User');

router.get('/', (req, res) => {
  res.render('index')
});

var register = require('./register');
var login = require('./login');
var user = require('./user');

router.use('/register', register);
router.use('/login', login);
router.use('/user', user);

module.exports = router;
