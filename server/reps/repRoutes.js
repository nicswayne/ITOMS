const repCtrl = require( './repCtrl' );
const userCtrl = require( '../users/userCtrl' );

module.exports = app => {

	app.get( `/api/reps`, userCtrl.isLoggedIn, repCtrl.find );
	app.get( `/api/reps/:id`, userCtrl.isLoggedIn, repCtrl.findOne );
	app.put( `/api/reps/:id`, userCtrl.isLoggedIn, repCtrl.update );
	app.post( `/api/reps`, userCtrl.isLoggedIn, repCtrl.create );
	app.delete( `/api/reps/:id`, userCtrl.isLoggedIn, repCtrl.delete );

};