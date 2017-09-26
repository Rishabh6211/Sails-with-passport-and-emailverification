/**
 * Yoga.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	autoCreatedAt: true,
    autoUpdatedAt: true,
  attributes: {
  		attributes: {
  		name:{
  			type:'string',
  			required:true
  		},
  		detail:{
  			type:'string',
  			required:true
  		},
  		image:{
  			type:'string',
  			required:true
  		},
  		price:{
  			type:'float',
  			decimal:true,
  			required:true
  		},
  		offerprice:{
  			type:'float',
  			decimal:true
  		},
  		duration:{
  			type:'string',
  			required:true
  		}
  }
  }
};

