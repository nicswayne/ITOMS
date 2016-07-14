// const LocalStrategy = require( 'passport-local' ).Strategy;
// const User = require( '../users/User' );

// module.exports = ( passport ) => {

// 	passport.serializeUser( ( user, res ) => {
// 		res( null, user.id );
// 	} );

// 	passport.deserializeUser( ( id, res ) => {
// 		res( err, user );
// 	} );

// 	passport.use( 'local-login', new LocalStrategy( {

//         usernameField : `email`,
//         passwordField : `password`,
//         passReqToCallback : true
// 	},
//     ( req, userName, password, res ) => {
//     	// console.log( 'req', req.body );

//         User.findOne( { 'userName' : userName }, ( err, user ) => {
//             if ( err ) {
// 				return res.status( 500 ).json( err );
//             }
//             else if ( !user ) {
//                 return res( null, false, req.flash( `loginMessage`, `No user found.` ) );
//             }
//             else if ( !user.validPassword( password ) ) {
//                 return res( null, false, req.flash( `loginMessage`, `Oops! Wrong password.` ) );
//             }
//             return res( null, user );
//         } );

//     } ) );

// };
