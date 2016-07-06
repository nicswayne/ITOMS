const ptDrugCtrl = require( './ptDrugCtrl' );

module.exports = app => {

	app.get( `/api/ptDrugs`, ptDrugCtrl.find );
	app.get( `/api/ptDrugs/:id`, ptDrugCtrl.findOne );
	app.put( `/api/ptDrugs/:id`, ptDrugCtrl.update );
	app.post( `/api/ptDrugs`, ptDrugCtrl.create );
	app.delete( `/api/ptDrugs/:id`, ptDrugCtrl.delete );

};