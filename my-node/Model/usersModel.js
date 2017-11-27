var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var useModel = new Schema({
    username  : String ,
    password  : String ,
    date      : { type: Date, default: Date.now }
});

var usersModel = mongoose.model('user', useModel);

module.exports = usersModel