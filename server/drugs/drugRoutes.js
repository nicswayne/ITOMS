const drugCtrl = require( './drugCtrl' );
const userCtrl = require( '../users/userCtrl' );

module.exports = app => {

	// app.get( `/api/drugs/:drugId/:orderId`, drugCtrl.findOrder );
	app.get( `/api/drugs/:id`,userCtrl.isLoggedIn, drugCtrl.findOne );
	app.get( `/api/drugs`,userCtrl.isLoggedIn,userCtrl.isLoggedIn, drugCtrl.find );
	app.put( `/api/drugs/:id`,userCtrl.isLoggedIn, drugCtrl.update );
	app.post( `/api/drugs`,userCtrl.isLoggedIn, drugCtrl.create );
	app.delete( `/api/drugs/:id`,userCtrl.isLoggedIn, drugCtrl.delete );
	app.delete( `/api/drugs/:drugId/:orderId`,userCtrl.isLoggedIn, drugCtrl.deleteOrder );

};