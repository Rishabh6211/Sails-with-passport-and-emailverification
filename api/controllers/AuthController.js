/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var auth = require('../services/AuthService');
module.exports = {
	login : function(req,res)
	{
		AuthService.login(req,res);
	},

	validate_token : function(req,res)
	{
		AuthService.isValidToken(req, res);
	},
	 logout: function(req, res){
        //req.logout is passportjs function to clear user information. see http://passportjs.org/docs
        req.logout();
        req.session.destroy();
        res.send(200);
    }

	
};

