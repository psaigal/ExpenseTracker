var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); 
var models = require('../../models/index');
var bcrypt = require('bcrypt-nodejs');
var User = models.User;
var expense = require('../expense')

router.use('/:id/expense', expense)

//CREATE NEW USER
router.post('/', function (req, res, next) {
	var password = bcrypt.hashSync(req.body.password);
	req.body.password = password;
	User.create(req.body, function (err, small) {
	  if(err) {
		throw err;
		res.json({message: err})
	}
	  else {
	  	res.send(small);
	  }
	})
});


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

//GET A SINGLE USER
router.get('/:id', function(req, res) {
    User.findById(req.params.id, function (err, user) {
		if (err) {
			console.log('GET Error: There was a problem retrieving: ' + err);
		} 
		else {
			console.log('GET Retrieving ID: ' + user._id);
			res.render('home', {name: user.firstname, id: user._id})
		}
    });
});

//DELETE A SINGLE USER
router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User "+ user.name +" was deleted.");
    });
});

//EDIT A SINGLE USER
router.put('/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});



module.exports = router;
