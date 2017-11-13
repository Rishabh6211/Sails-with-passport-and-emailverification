/**
 * Profiledetail.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
     userId:{
      model: 'user'
     },
  	 name:{
  	 	type:'string',
  	 	required:true
  	 },
  	 title:{
  	 	type:'string',
  	 	required:true
  	 },
  	 about:{
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
  	 },
  	 image: {
        type: 'string'
     }
  }
};

