var mongoose = require('mongoose');

//User model
var UserSchema = new mongoose.Schema({
     firstname: String,
     lastname: String,
     email: String,
     password: String,
     expenses: [{type: mongoose.Schema.Types.ObjectId, ref: 'Expense'}]
 });

var User = mongoose.model('User', UserSchema);
module.exports = User;




