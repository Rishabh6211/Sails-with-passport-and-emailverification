/**
 * ProfiledetailController
 *
 * @description :: Server-side logic for managing profiledetails
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	saveProfile:function(req,res){
		let data = req.body;
		Profiledetail.create(data).exec(function(err,result){
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
						message : "Data added Successfully",
						success : result

					}
				});
			}
		})
	},

	findProfile: function(req,res){
		let userId = req.param('userId');
		Profiledetail.findOne(userId).exec(function(err,result){
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

	updateProfile : function(req,res)
	{
		var  data = {};
		data = req.body;
		Offers.update({id:data.id},data).exec(function(err,result){
			if(err){
				return res.jsonx({
					code : 400,
					success:false,
					error : err
				});
			}
			else
			{
				return res.jsonx({
					code : 200,
					success:true,
					data : {
						message : "Successfully updated",
						success : result
					}
				});
			}
		})
	}
};

