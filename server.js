const express = require( 'express' );
const { json } = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const session = require( 'express-session' );
const passport = require( 'passport' );
const flash = require( 'connect-flash' );
const cookieParser = require( 'cookie-parser' );
const MR = require( './server/masterRoutes' );
const sessionConfig = require( './server/config/sessionConfig' );
// require( './server/config/passport' )( passport );

const port = 8888;
const mongoUri = 'mongodb://localhost:27017/inventory';
const app = express();

app.use( json() );
app.use( express.static( `${ __dirname }/public`) );
app.use( session( sessionConfig ) );
app.use( cookieParser() );
app.use( passport.initialize() );
app.use( passport.session() );
app.use( flash() );

MR( app );


mongoose.set( `debug`, true );
mongoose.connect( mongoUri );
mongoose.connection.once( `open`, () => {
  console.log( `connected to mongoDB at: ${ mongoUri }` );
});



app.listen( port, () => {
	console.log( `Express listening at ${ port }` );
})