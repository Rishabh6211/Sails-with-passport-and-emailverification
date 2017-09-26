/**
 * Offers.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
     autoCreatedAt: true,
      autoUpdatedAt: true,
  attributes: {
     
  		name : {
  			type:"string",
  			required:true
  		},
  		price:{
  			type:"float",
  			decimal:true,
  			required:true
  		},
  		offerPrice:{
  			type:"float",
  			decimal:true,
  			required:true
  		},
  		image: {
        type: 'string'
      },
      isDeleted:{
        type:'boolean',
        defaultsTo:false
      },
  }
};

