const patientCtrl = require( './patientCtrl' );
const userCtrl = require( '../users/userCtrl' );

module.exports = app => {

	app.get( `/api/patients`,userCtrl.isLoggedIn, patientCtrl.find );
	app.get( `/api/patients/:id`,userCtrl.isLoggedIn, patientCtrl.findOne );
	app.put( `/api/patients/:id`,userCtrl.isLoggedIn, patientCtrl.update );
	app.post( `/api/patients`,userCtrl.isLoggedIn, patientCtrl.create );
	// app.delete( `/api/patients/:id`, patientCtrl.delete );
	// app.delete( `/api/patients/:ptId/:drugId`, patientCtrl.deleteDrug );
	// app.delete( `/api/patients/:ptId/:impId`, patientCtrl.deleteImplant );

};