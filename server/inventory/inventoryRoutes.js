const inventoryCtrl = require( './inventoryCtrl' );
const userCtrl = require( '../users/userCtrl' );

module.exports = app => {

	app.get( `/api/inventory`,userCtrl.isLoggedIn, inventoryCtrl.find );
	app.post( `/api/inventory`,userCtrl.isLoggedIn, inventoryCtrl.create );

};