const express = require( 'express' );
const { json } = require( 'body-parser' );
const { urlencoded } = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const session = require( 'express-session' );
const passport = require( 'passport' );
const flash = require( 'connect-flash' );
const cookieParser = require( 'cookie-parser' );
const MR = require( './server/masterRoutes' );
const sessionConfig = require( './server/config/sessionConfig' );

//  config //

const passportConfig = require( './server/config/passport' );
passportConfig( passport );

// port and URI //

const port = process.env.PORT || 8888;
const mongoUri = 'mongodb://demo:itomsdemo@ds153735.mlab.com:53735/itoms';
const app = express();

//  app-preporcessors //

app.use( urlencoded( { extended: true } ) );
app.use( json() );
app.use( express.static( `${ __dirname }/public`) );
app.use( session( sessionConfig ) );
app.use( flash() );
app.use( cookieParser() );
app.use( passport.initialize() );
app.use( passport.session() );

// envoke master routes //

MR( app, passport );

// mongoose connection //

mongoose.set( `debug`, true );
mongoose.connect( mongoUri );
mongoose.connection.once( `open`, () => {
  console.log( `connected to mongoDB at: ${ mongoUri }` );
} );

//  express listen //

app.listen( port, () => {
	console.log( `Express listening at ${ port }` );
} );
