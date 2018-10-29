var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    "username" : String, 
    "role" : String, 
    "doctor" : String, 
    "researcher" : String, 
    "firstname" : String, 
    "lastname" : String,
    "profilepic":String,
    "organization":String
});

var User = mongoose.model('userdetail', userSchema);


module.exports = User;

