var mongoose = require('mongoose');

//User model
var ExpenseSchema = new mongoose.Schema({
	name: String,
	date: Date,
	time: String,
	amount: Number,
	description: String
     
 });

var Expense = mongoose.model('Expense', ExpenseSchema);
module.exports = Expense;

