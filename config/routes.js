/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  'post /auth/login': 'AuthController.login',
  'get /auth/validate_token' : 'AuthController.validate_token',
  'get /auth/logout': 'AuthController.logout',
  'post /register' : 'UserController.register',
  'get /verify' :'UsersController.verify',
  'get /verify' : 'UserController.verify',
 



//common
   'post /add'  : 'CommonController.add',
   'get /get'    : 'CommonController.list',
   'put /updat' : 'CommonController.update',
   'delete /delete' : 'CommonController.delete',
   'post /upload': 'CommonController.uploadImages',

// States API Routes
'get /states' : 'StateController.findStates',

//consult
    'post /consult'  : 'ConsultController.consult',

//cart
    'post /addcart' : 'CartController.cart',
    'delete /cart' : 'CartController.delete',
    'post /cartlist' : 'CartController.list',
//yoga
    'post /yoga' : 'YogaController.yoga',
    'get /yoga/:id' : 'YogaController.yogaProfile',
    'get /yogaProfile/:Id': 'YogaController.findProfile',
//physio
    'post /physiotherapy' : 'PhysiotherapyController.physiotherapy',
//gym
    'post /gym' : 'GymController.gym',

//profiledetail
    'post /profiledetail' :'ProfiledetailController.saveProfile',
    'get /profile' : 'ProfiledetailController.findProfile',
    'put/updateProfile' : 'ProfiledetailController.updateProfile',

    'post /like' :'LikeController.profileLike',
    'get /profileLike/:centerId/:userId' :'LikeController.getProfileLike',
    'get /count/:centerId' :'LikeController.countLike',

    'get /view/:centerId' : 'ViewController.view',
    'get /countview/:centerId' :'ViewController.countView',
    'post /rating' :'RatingController.saveRating',
    'get /likeProfile/:userId':'LikeController.getLikeProduct',
  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
