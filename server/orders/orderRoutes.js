const orderCtrl = require( './orderCtrl' );

module.exports = app => {

	app.get( `/api/orders`, orderCtrl.find );
	app.get( `/api/orders/:id`, orderCtrl.findOne );
	app.put( `/api/orders/:id`, orderCtrl.update );
	app.post( `/api/orders`, orderCtrl.create );
	app.delete( `/api/orders/:id`, orderCtrl.delete );

};