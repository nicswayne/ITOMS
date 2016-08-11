const materialCtrl = require( './materialCtrl' );
const userCtrl = require( '../users/userCtrl' );

module.exports = app => {

	app.get( `/api/materials`,userCtrl.isLoggedIn, materialCtrl.find );
	app.get( `/api/materials/:id`,userCtrl.isLoggedIn, materialCtrl.findOne );
	app.put( `/api/materials/:id`,userCtrl.isLoggedIn, materialCtrl.update );
	app.post( `/api/materials`, materialCtrl.create );
	app.delete( `/api/materials/:id`,userCtrl.isLoggedIn, materialCtrl.delete );

};
