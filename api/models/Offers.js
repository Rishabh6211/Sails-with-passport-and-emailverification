/**
 * Offers.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      autoCreatedAt: true,
      autoUpdatedAt: true,
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
        type: 'array'
      },
      isDeleted:{
        type:'boolean',
        defaultsTo:false
      },
  }
};

