const practiceCtrl = require( './practiceCtrl' );
const userCtrl = require( '../users/userCtrl' );

module.exports = app => {

	app.get( `/practices/:id`,userCtrl.isLoggedIn, practiceCtrl.findOne );
	app.put( `/practices/:id`,userCtrl.isLoggedIn, practiceCtrl.update );
	app.post( `/practices`,userCtrl.isLoggedIn,userCtrl.isLoggedIn, practiceCtrl.create );
	app.delete( `/practices/:id`,userCtrl.isLoggedIn, practiceCtrl.delete );

}