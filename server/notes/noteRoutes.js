const noteCtrl = require( './noteCtrl' );
const userCtrl = require( '../users/userCtrl' );

module.exports = app => {

	app.get( `/api/notes`,userCtrl.isLoggedIn, noteCtrl.find );
	app.get( `/api/notes/:id`,userCtrl.isLoggedIn, noteCtrl.findOne );
	app.put( `/api/notes/:id`,userCtrl.isLoggedIn, noteCtrl.update );
	app.post( `/api/refNotes`,userCtrl.isLoggedIn, noteCtrl.createRef );
	app.post( `/api/repNotes`,userCtrl.isLoggedIn, noteCtrl.createRep );
	app.delete( `/api/notes/:id`,userCtrl.isLoggedIn, noteCtrl.delete );

};