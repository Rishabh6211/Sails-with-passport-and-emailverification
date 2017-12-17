/**
 * YogaController
 *
 * @description :: Server-side logic for managing yogas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

		yoga(req,res){
		let data = req.body;
		
		Yoga.create(data).exec(function(err,result){
			
			if(err)
			{
			    return res.jsonx({
					code : 400,
					success:false,
					error : err
				});
				
			}
			else{
				return res.jsonx({
					code : 200,
					success:true,					
					message : "data added successfully",
					data : result

					
				});
			}
			
		})
	},
	yogaProfile : function(req,res)
	{
		let yogaId = req.param('yogaId');
		Yoga.find(yogaId).exec(function(err,result){
			if(!result)
			{
				return res.jsonx({
					code : 200,
					success:true,
					message : "No details found"
				});
			}
			else
			{
				return res.jsonx({
					code : 200,
					success:true,
					data : result
				});
			}
		});
	},
	findProfile: function(req,res){
		
		let yogaId = req.param('Id');

		Yoga.findOne(yogaId).exec(function(err,result){
			if(err){
				return res.jsonx({
					code : 400,
					success:false,
					error : err
				});
			}
			else{
				return res.jsonx({
					code : 200,
					success:true,
					data : {
						success : result

					}
				});
			}
		})
	},
	
	
};

