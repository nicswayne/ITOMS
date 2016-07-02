const noteCtrl = require( 'noteCtrl' );

module.exports = app => {

	app.get( `/:practice/notes`, noteCtrl.find );
	app.get( `/:practice/notes/:id`, noteCtrl.findOne );
	app.put( `/:practice/notes/:id`, noteCtrl.update );
	app.post( `/:practice/notes/:type`, noteCtrl.create );
	app.delete( `/:practice/notes/:id`, noteCtrl.delete );

};