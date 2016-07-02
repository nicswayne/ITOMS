const orderCtrl = require( './orderCtrl' );

module.exports = app => {

	app.get( `/:practice/orders`, orderCtrl.find );
	app.get( `/:practice/orders/:id`, orderCtrl.findOne );
	app.put( `/:practice/orders/:id`, orderCtrl.update );
	app.post( `/:practice/orders`, orderCtrl.create );
	app.delete( `/:practice/orders/:id`, orderCtrl.delete );

};