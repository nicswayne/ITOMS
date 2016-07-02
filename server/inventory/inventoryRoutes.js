const inventoryCtrl = require( 'inventoryCtrl' );

module.exports = app => {

	app.get( `/:practice/inventory`, inventoryCtrl.find );

};