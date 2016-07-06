const inventoryCtrl = require( './inventoryCtrl' );

module.exports = app => {

	app.get( `/api/inventory`, inventoryCtrl.find );
	app.post( `/api/inventory`, inventoryCtrl.create );

};