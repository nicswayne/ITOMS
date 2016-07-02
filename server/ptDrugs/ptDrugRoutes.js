const ptDrugCtrl = require( './ptDrugCtrl' );

module.exports = app => {

	app.get( `/:practice/ptDrugs`, ptDrugCtrl.find );
	app.get( `/:practice/ptDrugs/:id`, ptDrugCtrl.findOne );
	app.put( `/:practice/ptDrugs/:id`, ptDrugCtrl.update );
	app.post( `/:practice/ptDrugs`, ptDrugCtrl.create );
	app.delete( `/:practice/ptDrugs/:id`, ptDrugCtrl.delete );

};