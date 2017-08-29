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
	  	password:{
	  		type:'string',
	  		required:true
	  	},
	  	state:{
	  		type:'string'
	  	},
	  	address:{
	  		type:'string'
	  	},
	  	city:{
	  		type:'string'
	  	},
	  	phone:{
	  		type:'integer'
	  	},
	  	pincode:{
	  		type:'integer'
	  	},
	  	district:{
	  		type:'string'
	  	},
	  	isDeleted:{
	  		type:'boolean',
	  		defaultsTo:false
	  	},
	  	isVerified: {
            type: 'string',
            enum: ['Y','N'],
            defaultsTo: 'N'
        },
        code:{
        	type:'string'
        },
	  	toJson : function()
	  	{
	  		var obj = this.toObject();
	  		delete obj.password;
	  		return obj;
	  	}

  },
   beforeCreate: function (user, cb) {
    //delete user.password_confirmation;
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, function () {
        }, function (err, hash) {
            user.password = hash;
            cb(null, user);
        });
    });
  }
};

