const drugCtrl = require( './drugCtrl' );

module.exports = app => {

	app.get( `/:practice/drugs`, drugCtrl.find );
	app.get( `/:practice/drugs/:id`, drugCtrl.findOne );
	app.put( `/:practice/drugs/:id`, drugCtrl.update );
	app.post( `/:practice/drugs`, drugCtrl.create );
	app.delete( `/:practice/drugs/:id`, drugCtrl.delete );

};