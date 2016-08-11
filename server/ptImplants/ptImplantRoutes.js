const ptImplantCtrl = require( './ptImplantCtrl' );
const userCtrl = require( '../users/userCtrl' );

module.exports = app => {

	app.get( `/api/ptImplants`,userCtrl.isLoggedIn, ptImplantCtrl.find );
	app.get( `/api/ptImplants/:id`,userCtrl.isLoggedIn, ptImplantCtrl.findOne );
	app.put( `/api/ptImplants/:id`,userCtrl.isLoggedIn, ptImplantCtrl.update );
	app.post( `/api/ptImplants`,userCtrl.isLoggedIn, ptImplantCtrl.create );
	app.delete( `/api/ptImplants/:id`,userCtrl.isLoggedIn, ptImplantCtrl.delete );

};