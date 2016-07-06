const Patient = require( './Patients' );

module.exports = {

	find( req, res, next ) {
		Patient.find( { } )
		.populate( `referral` )
		.populate( `implants` )
		.populate( `drugs` )
		.exec( (err, populatedPatients ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( populatedPatients );
		})
	},

	findOne( req, res, next ) {
		Patient.findById( req.params.id )
		.populate( `referral` )
		.populate( `implants` )
		.populate( `drugs` )
		.exec( (err, populatedPatients ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( populatedPatients );
		})
	},

	update( req, res, next ) {
		Patient.findByIdAndUpdate( req.params.id, req.body, ( err, patient ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( patient );
		} )
	},

	create( req, res, next ) {
		new Patient( req.body ).save( ( err, newPatient ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 201 ).json( newPatient );
		})
	},

	delete( req, res, next ) {
		Patient.findByIdAndRemove( req.params.id, ( err, deletedPatient ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( deletedPatient );
		})
	},

	deleteImplant( req, res, next ) {
		Patient.findById( req.params.PatientId, ( err, patient ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			patient.implants.id( req.params.implantId, ( err, implant ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				implant.remove( ( err, deletedImplant ) => {
					if ( err ) {
						return res.status( 500 ).json( err );
					}
					return res.status( 200 ).json( deletedImplant );
				})
			})
		})
	},
	
	deleteDrug( req, res, next ) {
		Patient.findById( req.params.PatientId, ( err, drug ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			patient.drugs.id( req.params.drugId, ( err, drug ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				drug.remove( ( err, deletedDrug ) => {
					if ( err ) {
						return res.status( 500 ).json( err );
					}
					return res.status( 200 ).json( deletedDrug );
				})
			})
		})
	}
 
}