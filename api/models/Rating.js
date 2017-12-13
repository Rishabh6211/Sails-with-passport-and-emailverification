/**
 * Rating.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
 autoCreatedAt: true,
    autoUpdatedAt: true,
  attributes: {
  	reviewer:{
          model:'user'
        },

        center:{
  		model:'yoga'
  		},

        star: {
            type: 'integer',
            required: true,
        }, 
  }
};

