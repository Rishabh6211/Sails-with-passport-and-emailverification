var Promise = require('bluebird'),
    promisify = Promise.promisify;
    //console.log("hello");
/*var JwtStrategy = require('passport-jwt').Strategy,
	ExtractJwt = require('passport-jwt').ExtractJwt;
	var opts ={};
	opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
	opts.secretOrKey = 'rishabh';*/

module.exports ={

		save: function(data)
		{
			console.log("in data",data);
			//console.log("in context",context);
			var date = new Date();
			return API.Model(User).create(data)
			.then(function(crop){
				var result;
            if(crop){
                result = {
                            "Status": true,
                            "Code": 200,
                            "Message": "success",
                            "data": crop,
                        }
                
            }else{
                result = {
                           "Status": false,
                           "Code": 301,
                           "Message": "Faild"
                           }
            }

            return result;
			});
		},
		list : function(data,context)
		{
			passport.use(new JwtStrategy(opts, function(jwt_payload, done)
			{
				return API.Model(User).findOne({id:jwt_payload.sub}).then(function(user){
					if(user)
					{
						console.log("user", user);
					}
					else
					{
						condole.log("err");
					}
				})
			}))

		}
};