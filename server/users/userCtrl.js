const User = require( './User' );

module.exports = {

	find( req, res, next ) {
		User.find( { }, ( err, users ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( users );
		})
	},

	findOne( req, res, next ) {
		User.findById( req.params.id, (err, User ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( User );
		})
	},

	update( req, res, next ) {
		User.findByIdAndUpdate( req.params.id, req.body, ( err, User ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( User );
		} )
	},

	create( req, res, next ) {
		new User( req.body ).save( ( err, newUser ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 201 ).json( newUser );
		})
	},

	delete( req, res, next ) {
		User.findByIdAndRemove( req.params.id, ( err, deletedUser ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( deletedUser );
		})
	}
}