/**
 * ViewController
 *
 * @description :: Server-side logic for managing views
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	view : function(req,res){

		let data ={}
		data.ip =  req.ip;
		data.centerId = req.param('centerId');
		View.findOne({ip:data.ip}).exec(function(err,result){
			if(err){
			return res.jsonx({
					code : 404,
					success:false,
					message:result
				});
			}
			else if(result){
				return res.jsonx({
					code : 200,
					success:true,
					message:"data already exist"
				});
			}
			else {
				View.create(data).exec(function(err,result){
					if(err){
						console.log("err",err)
					}
					else{
						console.log("result",result);
					}
				})
			}
			
		})
		

	},

	countView: function(req,res){
	let centerId = req.param('centerId');
		View.find({centerId:centerId, isView:true}).then(result=>{
			console.log("result",result.length);
			if(!result){
				return res.jsonx({
						code : 404,
						success:false,
						message:"no data found"
					});
			}
			else{
				/*Like.count({isLiked:true}).then(count=>{					
				return res.jsonx({
						code : 200,
						success:true,
						count:count
					});
				})*/
				return res.jsonx({
						code : 200,
						success:true,
						count:result.length
					});
			}
		})
	},
	
	
	
};

