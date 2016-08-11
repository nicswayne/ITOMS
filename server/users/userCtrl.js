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
		User.findById( req.params.id, ( err, user ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			req.body.password = user.generateHash( req.body.password )
			User.findByIdAndUpdate( user._id, req.body, { new: true }, ( err, updatedUser ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				return res.status( 200 ).json( updatedUser );
			} )
		} );
	},

	create( req, res, next ) {
		let newUser = new User( req.body );
		newUser.password = newUser.generateHash( req.body.password );
		newUser.save( ( err, createdUser ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 201 ).json( createdUser );
		} );
	},

	delete( req, res, next ) {
		User.findByIdAndRemove( req.params.id, ( err, deletedUser ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( deletedUser );
		} );
	},

	isLoggedIn( req, res, next ) {
		if ( req.isAuthenticated() ) {
			return next();
		}
		res.redirect( `/login` );
	},
	logout( req, res, next ){
		req.logout();
		res.redirect( '/login' )
	}
}