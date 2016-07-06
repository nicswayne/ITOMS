const drugCtrl = require( './drugCtrl' );

module.exports = app => {

	// app.get( `/api/drugs/:drugId/:orderId`, drugCtrl.findOrder );
	app.get( `/api/drugs/:id`, drugCtrl.findOne );
	app.get( `/api/drugs`, drugCtrl.find );
	app.put( `/api/drugs/:id`, drugCtrl.update );
	app.post( `/api/drugs`, drugCtrl.create );
	app.delete( `/api/drugs/:id`, drugCtrl.delete );
	app.delete( `/api/drugs/:drugId/:orderId`, drugCtrl.deleteOrder );

};