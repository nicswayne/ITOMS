const ptDrugCtrl = require( './ptDrugCtrl' );
const userCtrl = require( '../users/userCtrl' );

module.exports = app => {

	app.get( `/api/ptDrugs`,userCtrl.isLoggedIn, ptDrugCtrl.find );
	app.get( `/api/ptDrugs/:id`,userCtrl.isLoggedIn, ptDrugCtrl.findOne );
	app.put( `/api/ptDrugs/:id`,userCtrl.isLoggedIn, ptDrugCtrl.update );
	app.post( `/api/ptDrugs`,userCtrl.isLoggedIn, ptDrugCtrl.create );
	app.delete( `/api/ptDrugs/:id`,userCtrl.isLoggedIn, ptDrugCtrl.delete );

};