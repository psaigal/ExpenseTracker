var mongoose = require('mongoose'); 
var mongoURI = "mongodb://psaigal:password@ds127963.mlab.com:27963/expensetrackerdb";
var db = mongoose.connect(mongoURI, function(err){
  if(err){
    console.log(err);
  } else{
    console.log('In database!');
  }
});

module.exports = db;
