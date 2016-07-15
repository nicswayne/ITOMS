const PtImplant = require( './PtImplants' );
const Patient = require( '../patients/Patients' );

module.exports = {

	find( req, res, next ) {
		PtImplant.find( { } )
		.populate( `implant`, `active brand size onHand minOnHand` )
		.populate( `referral`, `firstName lastName suffix practiceName phone email active` )
		.exec( ( err, populatedPtImplant ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( populatedPtImplant );
		})
	},

	findOne( req, res, next ) {
		PtImplant.findById( req.params.id )
		.populate( `implant`, `active brand size onHand` )
		.populate( `referral`, `firstName lastName suffix practiceName phone email active` )
		.exec( ( err, ptImplant ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( ptImplant );
		})
	},

	update( req, res ) {
		PtImplant.findByIdAndUpdate( req.params.id, req.body, { new: true }, ( err, ptImplant ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			Patient.findByIdAndUpdate( ptImplant.patient, { $push: { implants: ptImplant._id } }, ( err, pat ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
			} );
			return res.status( 200 ).json( ptImplant );
		} )
	},

	create( req, res ) {
		new PtImplant( req.body ).save( ( err, newPtImplant ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			Patient.findByIdAndUpdate( newPtImplant.patient, { $push: { implants: newPtImplant._id } }, ( err, pat ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
			} );
			return res.status( 201 ).json( newPtImplant );
		} );
	},

	delete( req, res ) {
		PtImplant.findByIdAndRemove( req.params.id, ( err, deletedPtImplant ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( deletedPtImplant );
		})
	}
 
}