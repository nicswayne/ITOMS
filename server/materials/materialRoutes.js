const materialCtrl = require( './materialCtrl' );

module.exports = app => {

	app.get( `/api/materials`, materialCtrl.find );
	app.get( `/api/materials/:id`, materialCtrl.findOne );
	app.put( `/api/materials/:id`, materialCtrl.update );
	app.post( `/api/materials`, materialCtrl.create );
	app.delete( `/api/materials/:id`, materialCtrl.delete );

};
