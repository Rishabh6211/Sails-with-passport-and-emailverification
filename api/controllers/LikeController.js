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
	
	if(json.userId || json.centerId){
		Like.findOne(json)
		.then(likeProduct=>{
			if(likeProduct){
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
		})

	}// end if
	else{
					message = "product id or user id is missing"
		}

},
	getProfileLike : function(req,res){
		let centerId =  req.param('centerId');
		let userId   =  req.param('userId')
		Like.findOne({centerId:centerId, userId:userId}).exec(function(err,result){
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
		Like.find({centerId:centerId, isLiked:true}).then(result=>{
		
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
	getLikeProduct: function(req,res){
		let userId = req.param('userId')
		Like.find({userId:userId , isLiked:true}).populate('centerId').exec(function(err,result){
			
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

