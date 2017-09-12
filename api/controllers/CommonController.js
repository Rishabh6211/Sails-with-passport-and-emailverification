/**
 * OffersController
 *
 * @description :: Server-side logic for managing offers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Promise = require('q');
var gm = require('gm');
module.exports = {

	add: function(req,res)
	{
		var Model = {};
		var data = {};
		data = req.body;
		console.log("data",data);
		var modelName = data.model;
        var Model = sails.models[modelName];
        console.log("model",Model)
		Model.create(data).exec(function(err,result)
		{	
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

		});
	},
	update : function(req,res)
	{
		var  data = {};
		data = req.body;
		var modelName = req.body.model;
        var Model = sails.models[modelName];
		Model.update({id:data.id},data).exec(function(err,result){
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
	},
	list : function(req,res)
	{
		var Model = {};
		var modelName = req.param('model');
		var Model = sails.models[modelName];
		Model.find({}).exec(function(err,result){
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
	delete: function (req, res) {            
       	
       	var modelName = req.param('model');
        var Model = sails.models[modelName];
        var itemId = req.param('id');
        
        let query = {};
        query.id = itemId;
        
        Model.find(query).exec(function(err, data) {
            if(err) {
                return res.jsonx({
                    success: false,
                    error:{
                    	code : 400,
                    	error : err
                    }
                });
            } else {
                Model.update({id:itemId},{isDeleted:true},function(err,data){
                    if(data) {
                        return res.jsonx({
                            success: true,
                            data:{
                                message: "Deleted Successfully"
                            }
                        });
                    } else {
                        return res.jsonx({
                            success:false,
                            error:{
		                    	code : 400,
		                    	message: "err"
		                    }
                        });
                    }
            
                });
            }
        })
    },

	uploadImages: function(req, res) {
		var fs = require('fs');
		//var path = require('path');
		var uuid = require('uuid');
		var randomStr = uuid.v4();
		var date = new Date();
		var currentDate = date.valueOf();
		
		var modelName = "offers";
		//var modelName = 'crops';
		
		var Model = sails.models[modelName];
		var name = randomStr + "-" + currentDate;

		var imagedata = req.body.data;
		imageBuffer = this.decodeBase64Image(imagedata);


		var imageType = imageBuffer.type;
		
		var typeArr = new Array();
		typeArr = imageType.split("/");
		var fileExt = typeArr[1];

		var size = Buffer.byteLength(imagedata,"base64");			
		var i = parseInt(Math.floor(Math.log(size) / Math.log(1024)));
	    var test = Math.round(size / Math.pow(1024, i),2);

		if(size <= 10737418){

			if((fileExt === 'jpeg') || (fileExt === 'JPEG') || (fileExt === 'JPG') || (fileExt === 'jpg') || (fileExt === 'PNG') || (fileExt === 'png')) {
				if (imageBuffer.error) return imageBuffer.error;

				var fullPath = name + '.'+ fileExt ;
				var imagePath = '/images/' + modelName + '/' + name + '.' + fileExt;
				var uploadLocation = 'assets/images/' + modelName + '/' + name + '.' + fileExt ;
				
				var thumbnails = [];
	           /* var tempLocation = '.tmp/public/images/'+ modelName + '/' + name + '.' + fileExt ;
	            var thumbtempLocation = '.tmp/public/images/'+ modelName + '/thumbnail/' + name + '.' + fileExt ;*/

				fs.writeFile('assets/images/'+modelName + '/'+ name + '.'+ fileExt, imageBuffer.data, function(imgerr, img) {
					
					if (imgerr) {
						console.log("in error");
						return res.jsonx({
		                    success: false,
		                    error: {
		                        code : 400,
		                        message : imgerr
		                    	
		                    },
		                });
					} else {
						console.log("in else");
						fs.readFile(uploadLocation, function(err, data) {
						  	if(err){
						  		return res.jsonx({
				                    success: false,
				                    error: {
				                        code : 400,
				                        message : err
				                    },
				                });
						  	} 
						  	if(data){
						  		var thumbpath = 'assets/images/' + modelName + '/thumbnail/200/' + name + '.' + fileExt;
						  		//var thumbtempLocation = '.tmp/public/images/'+ modelName + '/thumbnail/' +'200_' +name + '.' + fileExt ;
						  		
						  		gm(data)
						  		.resize('200', '200','^')
						  		.write(thumbpath, function (err) {
								  	
								  	if (!err){
								  		var thumbpath1 = 'assets/images/' + modelName + '/thumbnail/300/' + name + '.' + fileExt;
								  		thumbnails.push(thumbpath)
								  		gm(data)
								  		.resize('300', '300','^')
								  		.write(thumbpath1, function (error) {
								  			
								  			if(!error){
								  				thumbnails.push(thumbpath1)
								  				var thumbpath2 = 'assets/images/' + modelName + '/thumbnail/500/' + name + '.' + fileExt;
										  		gm(data)
										  		.resize('500', '500','^')
										  		.write(thumbpath2, function (er) {
										  			if(!er){
										  				
														return res.jsonx({
										                    success: true,
										                    data: {
										                        fullPath : fullPath,
										                        imagePath : imagePath,
									                        	//thumbpath : thumbnails
										                    },
										                });

										  			}
										  			
										  		})
								  			} else {
										  		return res.jsonx({
								                    success: false,
								                    error: {
								                        code : 400,
								                        message :"NOT_UPLOADED"
								                    	
								                    },
								                });
										  	} 
								  			
								  		})
								  	} else {
								  		return res.jsonx({
						                    success: false,
						                    error: {
						                        code : 400,
						                        message : "NOT_UPLOADEd"
						                    	
						                    },
						                });
								  	} 
								});

						  	} 						  	
						});
						/*return res.jsonx({
		                    success: true,
		                    data: {
		                        fullPath : fullPath,
		                        imagePath : imagePath,
	                        	thumbpath : thumbnails
		                    },
		                });*/
					}

				});
			
			} else {
				console.log("error");
				return res.jsonx({
                    success: false,
                    error: {
                        code : 400,
                        message :"INVALID_IMAGE"
                    	
                    },
                });
				
			}
		} else {
			return res.jsonx({
                success: false,
                error: {
                    code : 400,
                    message : "SIZE_EXCEEDED"
                	
                },
            });
		}
   	},

	/*function to decode base64 image*/
	decodeBase64Image: function(dataString) {
		var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
			response = {};
		if (matches) {

			if (matches.length !== 3) {
				return new Error('Invalid input string');
			}

			response.type = matches[1];
			response.data = new Buffer(matches[2], 'base64');
		} else {
			response.error = constantObj.messages.INVALID_IMAGE;
		}

		return response;
	}
};


