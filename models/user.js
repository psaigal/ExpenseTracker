var mongoose = require('mongoose');

//User model
var UserSchema = new mongoose.Schema({
     _id: mongoose.Schema.ObjectId,
     firstname: String,
     lastname: String,
     email: String,
     password: String
 });

var User = mongoose.model('User', UserSchema);
module.exports = User;




