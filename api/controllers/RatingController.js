/**
 * RatingController
 *
 * @description :: Server-side logic for managing ratings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	saveRating: function(req, res) {
		var data = req.body;
		console.log("body",data);
		
		Rating.findOne({reviewer: data.reviewer, centerId: data.centerId}).then(function(reviewerExist) {
			console.log("exist",reviewerExist);
			if(reviewerExist && reviewerExist != undefined ){
				/* as discussed with Mr. Rahul Sharma*/
				Rating.update({id:reviewerExist.id}, data).then(function(cart) {
					
	                return res.status(200).jsonx({
	                    success: true,
	                    code:200,
	                    data: {
	                        cart: cart,
	                        message: "updated",
	                    	key: 'UPDATED_RATING',
	                    },
	                });
	    		})
			}else{
				
			Rating.create(data).then(function(rating) {
				
	                return res.status(200).jsonx({
	                    success: true,
	                    code:200,
	                    data: {
	                        rating: rating,
	                        message: "successfully save",
	                    	key: 'SAVED_RATING',
	                    },
	                });
	        })
	        .fail(function(err){
	    		 return res.status(400).jsonx({
	          		success: false,
	          		error: {
	            		code: 400,
	            		message: err
	                },
	      		});
	    	});	
	       }

	    });

	},

	/* as discussed with Mr. Rahul Sharma*/
	/*updateRating: function(req, res) {
		var data = req.body;
		
		Rating.update({id:data.id}, dataRating.update({id:data.id}, data).then(function(cart) {

	                return res.status(200).jsonx({
	                    success: true,
	                    code:200,
	                    data: {
	                        cart: cart,
	                        message: constantObj.rating.UPDATED_RATING,
	                    	key: 'UPDATED_RATING',
	                    },
	                });
	    })).then(function(cart) {

	                return res.status(200).jsonx({
	                    success: true,
	                    code:200,
	                    data: {
	                        cart: cart,
	                        message: constantObj.rating.UPDATED_RATING,
	                    	key: 'UPDATED_RATING',
	                    },
	                });
	    })
	    .fail(function(err){
	        		return res.status(400).jsonx({
			              success: false,
			              error: {
			                code: 400,
			                message: err
			              },
			          });   
	    });
	},*/
	/*getAverageUserRating : function(req, res){

		let userId = req.param("id");

		if(!userId){
			return res.status(400).jsonx({
                success: false,
	               error: {
		                code: 400,
		                message: constantObj.rating.PARAM_ISSUE,
		                key: 'PARAM_ISSUE',
		              },
            });
		}

		commonService.getAverageRating(userId).then( function(response){

				return res.status(200).jsonx({
	                    success: true,
	                    code:200,
	                    data :response
	                  
	                });
		});


	},*/
	/*getAllRatings: function(req, res) {

		var page        = req.param('page');
		var count       = req.param('count');
		var skipNo      = (page - 1) * count;
		var search      = req.param('search');
		var query       = {};

		var sortBy    	= req.param('sortBy');
		
		if (sortBy) {
            sortBy = sortBy.toString();
        } else {
            sortBy = 'createdAt desc';
        }

		if (search) {
            query.$or = [{
                name: {
                        'like': '%' + search + '%'
                    }
                }
            ]
        }
        
		Rating.count(query).exec(function(err, total) {
		    if (err) {
		       return res.status(400).jsonx({
		           success: false,
		           error: err
		       });
		    } else {
		       Rating.find(query).sort(sortBy).populate('user').skip(skipNo).limit(count).exec(function(err, market) {
		            if (err) {
		                return res.status(400).jsonx({
		                   success: false,
		                   error: err
		                });
		            } else {
		                return res.jsonx({
		                    success: true,
		                    data: {
		                        market: market,
		                        total: total
		                    },
		                });
		            }
		       })
		    }
		})
	

	},
		*/
};

