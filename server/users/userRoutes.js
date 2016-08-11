const userCtrl = require( './userCtrl' );

module.exports = ( app, passport ) => {

	app.get( `/api/users`,  userCtrl.find );
	app.get( `/api/logout`, userCtrl.logout );
	app.get( `/api/users/:id`, userCtrl.isLoggedIn, userCtrl.findOne );
	app.put( `/api/users/:id`, userCtrl.isLoggedIn, userCtrl.update );
	app.post( `/api/login`, ( req, res, next ) => {
		passport.authenticate( 'local-login', ( err, user ) => {
			if ( err ) {
				return next( err );
			} else {
				req.logIn( user, err => {
					if ( err ) {
						return res.status( 400 ).json( err );
					}
					return res.status( 200 ).json( user );
				} );
			}
		} )( req, res, next );
	} );
	app.post( `/api/users`,  userCtrl.create );
	app.delete( `/api/users/:id`,  userCtrl.delete );

};
