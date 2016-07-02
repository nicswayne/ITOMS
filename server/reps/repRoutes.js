const repCtrl = require( './repCtrl' );

module.exports = app => {

	app.get( `/:practice/reps`, repCtrl.find );
	app.get( `/:practice/reps/:id`, repCtrl.findOne );
	app.put( `/:practice/reps/:id`, repCtrl.update );
	app.post( `/:practice/reps`, repCtrl.create );
	app.delete( `/:practice/reps/:id`, repCtrl.delete );

};