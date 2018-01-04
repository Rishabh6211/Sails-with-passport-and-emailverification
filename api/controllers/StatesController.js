/**
 * StateController
 *
 * @description :: Server-side logic for managing states
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	  
	  findStates : function(req,res)
	  {
	  	States.find({}).exec(function(err,states)
	  	{
	  		if(err)
	  		{
	  			return res.status(400).jsonx({
                   success: false,
                   error: err
                });
	  		}
	  		else
	  		{
	  			return res.jsonx({
                    success: true,
                    data: {
                        states: states,
                    },
                });
	  		}
	  	})
	  }
};

