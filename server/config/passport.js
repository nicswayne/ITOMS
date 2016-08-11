const LocalStrategy = require( 'passport-local' ).Strategy;
const Users = require( '../users/User' );


module.exports = passport => {


	//  local login //

	passport.use( 'local-login', new LocalStrategy(	( username, password, done ) => {
		Users.findOne( { 'username': username }, ( err, user ) => {
			if ( err ) {
				return done ( err );
			}
			if ( !user ) {
				return done( null, false, { message: `Incorrect username` } );
			}
			if ( !user.validPassword( password, user.password ) ) {
				return done( null, false, { message: `Incorrect password` } );
			}			
			return done( null, user );
		} );
	} ) );

	passport.serializeUser( ( user, done ) => {
		done( null, user._id );
	} );

	passport.deserializeUser( ( id, done ) => {
		Users.findById( id, ( err, user ) => {
			if( err ){
				done( err, null );
			}
			done( null, user );
		} );
	} );
};