var express = require('express');
var router = express.Router();
var usersModel = require('../model/usersModel');

/* GET users listing. */

router.post('/register', function(req, res, next) {
	var users = new usersModel();
	console.log('12');
	users.username = req.body.username;
	users.password = req.body.password;
	users.save(function (err) {
	    if(err){
	    	console.log('保存失败');
	    }
	});
});

module.exports = router;
