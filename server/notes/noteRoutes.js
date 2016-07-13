const noteCtrl = require( './noteCtrl' );

module.exports = app => {

	app.get( `/api/notes`, noteCtrl.find );
	app.get( `/api/notes/:id`, noteCtrl.findOne );
	app.put( `/api/notes/:id`, noteCtrl.update );
	app.post( `/api/refNotes`, noteCtrl.createRef );
	app.post( `/api/repNotes`, noteCtrl.createRep );
	app.delete( `/api/notes/:id`, noteCtrl.delete );

};