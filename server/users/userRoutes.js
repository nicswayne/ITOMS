const userCtrl = require( './userCtrl' );

module.exports = app => {

	app.get( `/api/users`, userCtrl.find );
	app.get( `/api/users/:id`, userCtrl.findOne );
	app.put( `/api/users/:id`, userCtrl.update );
	app.post( `/api/users`, userCtrl.create );
	app.delete( `/api/users/:id`, userCtrl.delete );

};