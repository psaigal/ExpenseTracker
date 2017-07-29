var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );
var User = mongoose.model('User');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

var register = require('./register');
var login = require('./login');

router.use('/register', register);
router.use('/login', login);

module.exports = router;
