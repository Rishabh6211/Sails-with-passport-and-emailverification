/**
 * ConsultController
 *
 * @description :: Server-side logic for managing consults
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	consult(req,res){
		let data = req.body;
		
		Consult.create(data).exec(function(err,result){
			
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
					message : "We will contact you soon",
					data : result

					
				});
			}
			
		})
	}
};

