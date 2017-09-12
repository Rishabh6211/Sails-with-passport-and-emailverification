/**
 * OffersController
 *
 * @description :: Server-side logic for managing offers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	addOffers: function(req,res)
	{
		var data = {};
		data = req.body;
		Offers.create(data).exec(function(err,result)
		{	
			if(err)
			{
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
						message : "Data added Successfully",
						success : result

					}
				});
			}

		});
	},
	listOffers : function(req,res)
	{
		Offers.find({}).exec(function(err,result){
			if(err)
			{
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
						success : result
					}
				});
			}
		});
	},
	updateOffers : function(req,res)
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

