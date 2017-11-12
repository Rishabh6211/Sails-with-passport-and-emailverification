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
  		name:{
  			type:'string',
  			required:true
  		},
      title:{
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
  			decimal:true,
  			required:true
  		},
  		location:{
  			type:'string',
  			required:true
  		},
      facebook:{
      type:'string',
       },
       instaa:{
        type:'string'
       },
       youtube:{
        type:'string'
       },
       services:{
        type : 'array'
       },
       phone:{
        type: 'number'
       },
       email:{
        type:'string'
       },
       mainservice:{
        type:'array'
       }
  }
  
};

