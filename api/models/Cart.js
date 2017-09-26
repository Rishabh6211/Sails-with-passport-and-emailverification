/**
 * Cart.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    autoCreatedAt: true,
    autoUpdatedAt: true,
  attributes: {

        userId: {
            model: 'user'
        },

        productId: {
            type: 'string'
        },

        productType: {
            type: 'string'
        }
  }
};

