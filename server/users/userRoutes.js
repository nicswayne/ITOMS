const userCtrl = require( 'userCtrl' );

module.exports = app => {

	app.get( `/:practice/users`, userCtrl.find );
	app.get( `/:practice/users/:id`, userCtrl.findOne );
	app.put( `/:practice/users/:id`, userCtrl.update );
	app.post( `/:practice/users`, userCtrl.create );
	app.delete( `/:practice/users/:id`, userCtrl.delete );

};