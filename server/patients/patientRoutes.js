const patientCtrl = require( './patientCtrl' );

module.exports = app => {

	app.get( `/:practice/patients`, patientCtrl.find );
	app.get( `/:practice/patients/:id`, patientCtrl.findOne );
	app.put( `/:practice/patients/:id`, patientCtrl.update );
	app.post( `/:practice/patients`, patientCtrl.create );
	app.delete( `/:practice/patients/:id`, patientCtrl.delete );

};