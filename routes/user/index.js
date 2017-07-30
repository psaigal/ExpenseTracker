var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); 
var models = require('../../models/index')
var User = models.User;

router.get('/', function(req, res, next) {
  res.render('register')
});


// route middleware to validate :id
router.param('id', function(req, res, next, id) {
    //console.log('validating ' + id + ' exists');
    //find the ID in the Database
    mongoose.model(User).findById(id, function (err, user) {
        //if it isn't found, we are going to repond with 404
        if (err) {
            console.log(id + ' was not found');
            res.status(404)
            var err = new Error('Not Found');
            err.status = 404;
            res.format({
                html: function(){
                    next(err);
                 },
                json: function(){
                       res.json({message : err.status  + ' ' + err});
                 }
            });
        //if it is found we continue on
        } else {
            //uncomment this next line if you want to see every JSON document response for every GET/PUT/DELETE call
            //console.log(blob);
            // once validation is done save the new item in the req
            req.id = id;
            // go to the next thing
            next(); 
        } 
    });
});

 router.get('/:id', function(req, res) {
    mongoose.model(User).findById(req.id, function (err, user) {
      if (err) {
        console.log('GET Error: There was a problem retrieving: ' + err);
      } else {
        console.log('GET Retrieving ID: ' + user._id);
        // var blobdob = blob.dob.toISOString();
        // blobdob = blobdob.substring(0, blobdob.indexOf('T'))
        // res.format({
        //   html: function(){
        //       res.render('blobs/show', {
        //         "blobdob" : blobdob,
        //         "blob" : blob
        //       });
        //   },
        //   json: function(){
        //       res.json(blob);
        //   }
        // });
      }
    });
  });

module.exports = router;
