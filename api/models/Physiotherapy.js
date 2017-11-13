/**
 * Physiotherapy.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    autoCreatedAt: true,
      autoUpdatedAt: true,
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
  		discount:{
  			type:'float',
  			decimal:true
  		},
  		services:{
  			type:'array',
  			required:true
  		},
      location:{
        type:'string',
        required:true
      }

  }
};

