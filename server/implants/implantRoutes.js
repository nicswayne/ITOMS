const implantCtrl = require( './implantCtrl' );

module.exports = app => {

	app.get( `/:practice/implants`, implantCtrl.find );
	app.get( `/:practice/implants/:id`, implantCtrl.findOne );
	app.put( `/:practice/implants/:id`, implantCtrl.update );
	app.post( `/:practice/implants`, implantCtrl.create );
	app.delete( `/:practice/implants/:id`, implantCtrl.delete );

};