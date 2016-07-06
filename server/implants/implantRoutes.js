const implantCtrl = require( './implantCtrl' );

module.exports = app => {

	app.get( `/api/implants`, implantCtrl.find );
	app.get( `/api/implants/:id`, implantCtrl.findOne );
	app.put( `/api/implants/:id`, implantCtrl.update );
	app.post( `/api/implants`, implantCtrl.create );
	app.delete( `/api/implants/:id`, implantCtrl.delete );
	app.delete( `/api/implants/:impId/:orderId`, implantCtrl.deleteOrder );

};