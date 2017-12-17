/**
 * LikeController
 *
 * @description :: Server-side logic for managing likes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	profileLike : function(req,res){
	let json = {}
	 json.userId = req.body.userId;
	 json.centerId = req.body.centerId;
	console.log("json",json)
	
	if(json.userId || json.centerId){
		Like.findOne(json)
		.then(likeProduct=>{
			console.log("lokepr",likeProduct)
			if(likeProduct){
				console.log("like")
				if(likeProduct.isLiked == false){
						Like.update({userId:json.userId, centerId:json.centerId},{isLiked:true})
						.then(success=>{
							return res.jsonx({
								code : 200,
								success:true,
								message:"successfully like",
							
							});
						})
				}else{
					Like.update({userId:json.userId, centerId:json.centerId},{isLiked:false})
						.then(success=>{
							console.log("json",success)
							return res.jsonx({
								code : 200,
								success:true,
								message:"successfully dislike",
							
							});
						})
				}

				}
			else{
				 Like.create(json)
				 .then(success=>{
				 	console.log("succeess*****",success)
					return res.jsonx({
								code : 200,
								success:true,
								message:"successfully like",
							
							});
				    
				 })
			}
			
		}) // end then 
		.catch(err=>{
			message = "error"
    		console.log("error")
		})

	}// end if
	else{
					message = "product id or user id is missing"
		    		console.log("message",message);
		}

},
	getProfileLike : function(req,res){
		console.log("here")
		let centerId =  req.param('centerId');
		
		Like.findOne({centerId:centerId}).exec(function(err,result){
			console.log("result",result)
			if(!result){
				return res.jsonx({
						code : 404,
						message:"data not found"
					
					});
			}
			else if(result.isLiked===true){
				return res.jsonx({
						code : 200,
						success:true,
						message:"already like"
					
					});
			}
			else if(result.isLiked===false){
				return res.jsonx({
						code : 400,
						success:true,
						message:"already dislike"
					
					});
			}
			else{
				console.log("errpr");
			}
		})
	},
	countLike: function(req,res){
	let centerId = req.param('centerId');
		console.log("in count like");
		Like.find({centerId:centerId, isLiked:true}).then(result=>{
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
			console.log("count",count);
		})
	},
	getLikeProduct: function(req,res){
		let userId = req.param('userId')
		console.log('userId',userId);
		Like.find({userId:userId , isLiked:true}).populate('centerId').exec(function(err,result){
			console.log("result",result);
			if(err){
				return res.jsonx({
					code : 400,
					success:false,
					error:err
				});
			}
			else if(!result){
				return res.jsonx({
					code : 304,
					success:false,
					message:"data not found on this id"
				});
			}
			else{
				return res.jsonx({
					code : 200,
					success:true,
					message:result
				});
			}
		})
	}
	

};

