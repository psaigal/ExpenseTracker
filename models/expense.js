var mongoose = require('mongoose');

//User model
var ExpenseSchema = new mongoose.Schema({
	name: String,
	date: Date,
	time: String,
	amount: Number,
	description: String,
	creator: {type: mongoose.Schema.Types.ObjectId, ref:'User'}
 });

var Expense = mongoose.model('Expense', ExpenseSchema);
module.exports = Expense;

