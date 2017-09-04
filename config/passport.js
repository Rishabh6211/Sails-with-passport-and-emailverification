var passport 	  = require('passport');
var bcrypt 		  = require('bcrypt-nodejs');
var LocalStrategy =	require('passport-local').Strategy;

passport.use(new LocalStrategy(
    {usernameField: 'email'},
    function(email, password, done) {
        User.find({email:email}).exec(function(err, user) {
            console.log("1",user)
            if (err) {
                return done(null, err);
            }
            if (!user || user.length < 1) {
                return done(null, false, {
                    message: 'Incorrect User'
                });
            }

            bcrypt.compare(password, user[0].password, function(err, res) {
                console.log("2",res, err)
                if (err || !res) {
                    return done(null, false, {
                        message: 'Invalid Password'
                    });
                } else {
                    console.log("user",user)
                    return done(null,user);
                }
            });
        });
    })
);

module.exports = {

	http:{
		customMiddleware : function(app)
		{
			app.use(passport.initialize());
			app.use(passport.session());
		}
	}

};