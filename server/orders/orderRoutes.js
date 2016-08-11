const orderCtrl = require( './orderCtrl' );
const userCtrl = require( '../users/userCtrl' );

module.exports = app => {

	app.get( `/api/orders`,userCtrl.isLoggedIn, orderCtrl.find );
	app.get( `/api/orders/:id`,userCtrl.isLoggedIn, orderCtrl.findOne );
	app.put( `/api/orders/:id`,userCtrl.isLoggedIn, orderCtrl.update );
	app.post( `/api/orders`,userCtrl.isLoggedIn, orderCtrl.create );
	app.delete( `/api/orders/:id`,userCtrl.isLoggedIn, orderCtrl.delete );

};