const patientCtrl = require( './patientCtrl' );

module.exports = app => {

	app.get( `/api/patients`, patientCtrl.find );
	app.get( `/api/patients/:id`, patientCtrl.findOne );
	app.put( `/api/patients/:id`, patientCtrl.update );
	app.post( `/api/patients`, patientCtrl.create );
	app.delete( `/api/patients/:id`, patientCtrl.delete );
	app.delete( `/api/patients/:ptId/:drugId`, patientCtrl.deleteDrug );
	app.delete( `/api/patients/:ptId/:impId`, patientCtrl.deleteImplant );

};