const materialCtrl = require( './materialCtrl' );

module.exports = app => {

	app.get( `/:practice/materials`, materialCtrl.find );
	app.get( `/:practice/materials/:id`, materialCtrl.findOne );
	app.put( `/:practice/materials/:id`, materialCtrl.update );
	app.post( `/:practice/materials`, materialCtrl.create );
	app.delete( `/:practice/materials/:id`, materialCtrl.delete );

};
