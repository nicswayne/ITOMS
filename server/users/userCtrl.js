const User = require( './User' );

module.exports = {

	find( req, res, next ) {
		User.find( { }, ( err, users ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( users );
		} );
	},

	findOne( req, res, next ) {
		User.findById( req.params.id, ( err, User ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( User );
		} );
	},

	update( req, res, next ) {
		User.findByIdAndUpdate( req.params.id, req.body, ( err, User ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( User );
		} );
	},

	create( req, res ) {
		let newUser = new User( req.body );
		newUser.password = newUser.generateHash( req.body.password );
		newUser.save( ( err, userCreated ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 201 ).json( userCreated );
		} )
	},

	delete( req, res ) {
		User.findByIdAndRemove( req.params.id, ( err, deletedUser ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( deletedUser );
		} );
	},

	loginUser( req, res ) {
		console.log( 'req', req.body );
		User.findOne( { 'username' : req.body.username }, ( err, user ) => {
			// console.log( "user", user )
            if ( err ) {
				return res.status( 500 ).json( err );
            }
            if ( !user ) {
            	return res.status( 401 ).json( `user name not found` );
            }
            else if ( req.body.password !== user.password ) ) {
				return res.status( 401 ).json( `incorrect password` );
            }
            return res.status( 200 ).json(  user );
        } );
		// passport.authenticate( `local-login`, {
		// 	successRedirect : `/home`,
		// 	failureRedirect: `/login`,
		// 	failuerFlash: true
		// } );
	}

	// isLoggedIn( req, res, next ) {
	// 	if ( req.isAuthenticated() ) {
	// 		return next();
	// 	}
	// 	res.redirect( `/login` );
	// }
}