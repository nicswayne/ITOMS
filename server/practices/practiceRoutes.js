const practiceCtrl = require( './practiceCtrl' );

module.exports = app => {

	app.get( `/practices/:id`, practiceCtrl.findOne );
	app.put( `/practices/:id`, practiceCtrl.update );
	app.post( `/practices`, practiceCtrl.create );
	app.delete( `/practices/:id`, practiceCtrl.delete );

}