const ptImplantCtrl = require( './ptImplantCtrl' );

module.exports = app => {

	app.get( `/:practice/ptImplants`, ptImplantCtrl.find );
	app.get( `/:practice/ptImplants/:id`, ptImplantCtrl.findOne );
	app.put( `/:practice/ptImplants/:id`, ptImplantCtrl.update );
	app.post( `/:practice/ptImplants`, ptImplantCtrl.create );
	app.delete( `/:practice/ptImplants/:id`, ptImplantCtrl.delete );

};