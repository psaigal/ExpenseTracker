var express = require('express');
var router = express.Router({mergeParams: true});
var mongoose = require('mongoose'); 
var models = require('../../models/index');
var User = models.User;
var Expense = models.Expense;

//CREATE NEW EXPENSE
router.post('/', function (req, res, next) {
	User.findById(req.params.id, function (err, user) {
		if (err) {
			console.log('GET Error: There was a problem retrieving: ' + err);
		} 
		else {
			Expense.create({name: req.body.name, date: req.body.date, time: req.body.time, amount: req.body.amount, description: req.body.description, creator: user._id}, function (err, expense) {
				if(err) {
					// throw err;
					return res.status(300).send(err, expense);
				}
			  	else {
			  		Expense.findOne({ '_id': expense._id }).populate('creator').exec(function (err, expense) {
					  if (err) return handleError(err);
					});
					res.render('home', {name: user.firstname, id: req.params.id});
					// res.json(expense);
				}
			})
		}
	});
});








// GET ALL EXPENSES
router.get('/', function (req, res, next) {
	User.findOne({_id: req.params.id}, function (err, user) {
		if (err) {
			console.log('GET Error: There was a problem retrieving: ' + err);
		} 
		else {
			Expense.find({ creator : user._id }).exec(function (err, expenses) {
			  if (err) return handleError(err);
			  console.log(user);
			  console.log("************");
			  res.render('home', {name: user.firstname, id: req.params.id});
			});
		}
	});
});


//GET ONE EXPENSE


//EDIT EXPENSE


//DELETE EXPENSE




// route middleware to validate :id
// router.param('id', function(req, res, next, id) {
//     //console.log('validating ' + id + ' exists');
//     //find the ID in the Database
//     mongoose.model(User).findById(id, function (err, user) {
//         //if it isn't found, we are going to repond with 404
//         if (err) {
//             console.log(id + ' was not found');
//             res.status(404)
//             var err = new Error('Not Found');
//             err.status = 404;
//             res.format({
//                 html: function(){
//                     next(err);
//                  },
//                 json: function(){
//                        res.json({message : err.status  + ' ' + err});
//                  }
//             });
//         //if it is found we continue on
//         } else {
//             //uncomment this next line if you want to see every JSON document response for every GET/PUT/DELETE call
//             //console.log(blob);
//             // once validation is done save the new item in the req
//             req.id = id;
//             // go to the next thing
//             next(); 
//         } 
//     });
// });





module.exports = router;
