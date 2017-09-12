/**
 * Trainor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  		name:{
  			type:'string',
  			required:true
  		},
  		specialist:{
  			type:'string',
  			required:true
  		},
  		tagline:{
  			type:'string'

  		},
  		details:{
  			type:'string'
  		},
  		contact:{
  			type:'string',
  			required:true
  		},
  		experience:{
  			type:'string',

  		},
  		image: {
        type: 'array'
      }
  }
};

