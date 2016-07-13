const Patient = require( './Patients' );
const Drugs = require( '../drugs/Drugs' );
const Implants = require( '../implants/Implants' );
const Users = require( '../Users/User' );

module.exports = {

	find( req, res ) {
		Patient.find( { } )
		.populate( `referral`, `firstName lastName suffix practiceName phone fax email active` )
		.populate( `implants`, `brand size lot insertionDate` )
		.populate( `drugs` )
		.exec( ( err, ptDrug ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			Drugs.populate( ptDrug, {
				path: `drugs.drug`,
				select: `brand generic vialType`
			}, ( err, populatedPtDrug ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				Implants.populate( populatedPtDrug, {
					path: `implants.implant`,
					select: `brand size`
				}, ( err, populatedPtImplant ) => {
					if ( err ) {
						return res.status( 500 ).json( err );
					}
					return res.status( 200 ).json( populatedPtImplant );
				} );
			} );
		} );
	}

	, findOne( req, res ) {
		Patient.findById( req.params.id )
		.populate( `referral`, `firstName lastName suffix practiceName phone fax email active` )
		.populate( `implants` )
		.populate( `drugs` )
		.exec( ( err, ptDrug ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			Drugs.populate( ptDrug, {
				path: `drugs.drug`
				,	select: `brand generic vialType`
			}
			, ( err, populatedPtDrug ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				Implants.populate( populatedPtDrug, {
					path: `implants.implant`
					, select: `brand size`
				}
			, ( err, populatedPtImplant ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				return res.status( 200 ).json( populatedPtImplant );
			} );
			} );
		} );
	}

	, update( req, res ) {
		Patient.findByIdAndUpdate( req.params.id, req.body, ( err, patient ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( patient );
		} );
	}

	, create( req, res ) {
		new Patient( req.body ).save( ( err, newPatient ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 201 ).json( newPatient );
		} );
	}

	, delete( req, res ) {
		Patient.findByIdAndRemove( req.params.id, ( err, deletedPatient ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( deletedPatient );
		} );
	}

	, deleteImplant( req, res ) {
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
				} );
			} );
		} );
	}

	, deleteDrug( req, res ) {
		Patient.findById( req.params.PatientId, ( err, patient ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			patient.drugs.findById( req.params.drugId, ( err, drug ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				drug.remove( ( err, deletedDrug ) => {
					if ( err ) {
						return res.status( 500 ).json( err );
					}
					return res.status( 200 ).json( deletedDrug );
				} );
			} );
		} );
	}

};
