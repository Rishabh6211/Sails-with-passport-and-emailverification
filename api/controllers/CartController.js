/**
 * CartController
 *
 * @description :: Server-side logic for managing carts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	 cart: function(req, res){
	 	let data = req.body;
	 	console.log("cart",data);
        Cart.create(data).then(function(result){
            return res.jsonx({
                success: true,
                data: result
            })
        }).fail(function(error){
            return res.jsox({
                success: false,
                error: error
            });
        });

    },

    list: function(req,res){
        let data = req.body;
        console.log("data",data);
        var id   = data.userId;
        var query = { userId: id };
        var product = {}

        Cart.find(query).populate('userId').then(function(data){
            async.each(data, function(product, callback) {
                var Model = sails.models[product.productType];

                Model.findOne({id:product.productId})
                .then(function(productdata){
                    product.productdata = productdata;
                    callback();
                })
                .fail(function(error){
                    callback(error);
                })
                        
            },function(error){
                if(error){ 
                    console.log("error is here",error);
                } else {
                    return res.jsonx({
                        success: true,
                        data: {
                            data: data,
                            key: 'USER_WISHLIST' 
                        }
                    });
                }
            });
         })
    },

    delete: function(req, res){
    	let data = req.body;
        let query = {userId:data.userId,productId:data.productId};

        Cart.destroy(query).then(function(result){
            if( !_.isEmpty(result) ){
                return res.jsonx({
                    success: true,
                    message: "Wishlist deleted"
                })
            } else {
                return res.jsonx({
                    success: false,
                    message: "some error occured"
                })
            }
        }).fail(function(error){
            return res.jsonx({
                success: false,
                error: error
            })
        })
    }
};

