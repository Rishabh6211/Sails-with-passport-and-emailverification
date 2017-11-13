/**
 * PhysiotherapyController
 *
 * @description :: Server-side logic for managing physiotherapies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

/**
 * YogaController
 *
 * @description :: Server-side logic for managing yogas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

		physiotherapy(req,res){
		let data = req.body;
		
		Physiotherapy.create(data).exec(function(err,result){
			
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
	}
	
};


