const ptImplantCtrl = require( './ptImplantCtrl' );

module.exports = app => {

	app.get( `/api/ptImplants`, ptImplantCtrl.find );
	app.get( `/api/ptImplants/:id`, ptImplantCtrl.findOne );
	app.put( `/api/ptImplants/:id`, ptImplantCtrl.update );
	app.post( `/api/ptImplants`, ptImplantCtrl.create );
	app.delete( `/api/ptImplants/:id`, ptImplantCtrl.delete );

};