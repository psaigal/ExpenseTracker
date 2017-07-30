var mongoose = require('mongoose');

//User model
var UserSchema = new mongoose.Schema({
     firstname: String,
     lastname: String,
     email: String,
     password: String
     
 });

var User = mongoose.model('User', UserSchema);
module.exports = User;




