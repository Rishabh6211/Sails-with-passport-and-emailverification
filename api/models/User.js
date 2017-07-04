/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt = require('bcrypt-nodejs');
module.exports = {
	autoCreatedAt: true,
    autoUpdatedAt: true,
  attributes: {
  		username:{
	  		type:'string',
	  		required:true
	  	},
	  	email:{
	  		type:'string',
	  		required:true,
	  		//unique:true
	  	},
	  	/*password:{
	  		type:'string',
	  		required:true
	  	},*/
	  	isDeleted:{
	  		type:'boolean',
	  		defaultsTo:false
	  	},
	  	toJson : function()
	  	{
	  		var obj = this.toObject();
	  		delete obj.password;
	  		return obj;
	  		console.log("obj",obj);
	  	}

  },
   beforeCreate: function (user, cb) {
    //delete user.password_confirmation;
    bcrypt.genSalt(10, function (err, salt) {
    	console.log("salt", salt)
        bcrypt.hash(user.password, salt, function () {
        	console.log("pass",user.password)
        }, function (err, hash) {
        	console.log("hash",hash)
            user.password = hash;
            cb(null, user);
            console.log("user",user)
        });
    });
  }
};

