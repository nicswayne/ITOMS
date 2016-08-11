const implantCtrl = require( './implantCtrl' );
const userCtrl = require( '../users/userCtrl' );

module.exports = app => {

	app.get( `/api/implants`,userCtrl.isLoggedIn, implantCtrl.find );
	app.get( `/api/implants/:id`,userCtrl.isLoggedIn, implantCtrl.findOne );
	app.put( `/api/implants/:id`,userCtrl.isLoggedIn, implantCtrl.update );
	app.post( `/api/implants`,userCtrl.isLoggedIn, implantCtrl.create );
	app.delete( `/api/implants/:id`,userCtrl.isLoggedIn, implantCtrl.delete );
	app.delete( `/api/implants/:impId/:orderId`,userCtrl.isLoggedIn, implantCtrl.deleteOrder );

};