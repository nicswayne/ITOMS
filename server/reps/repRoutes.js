const repCtrl = require( './repCtrl' );

module.exports = app => {

	app.get( `/api/reps`, repCtrl.find );
	app.get( `/api/reps/:id`, repCtrl.findOne );
	app.put( `/api/reps/:id`, repCtrl.update );
	app.post( `/api/reps`, repCtrl.create );
	app.delete( `/api/reps/:id`, repCtrl.delete );

};