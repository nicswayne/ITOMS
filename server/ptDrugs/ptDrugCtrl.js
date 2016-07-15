const PtDrug = require( './PtDrugs' );
const Patient = require( '../patients/Patients' );

module.exports = {

	find( req, res, next ) {
		PtDrug.find( { } )
		.populate( `drug`, `brand generic strength active vialType` )
		.exec( ( err, populatedPtDrug ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( populatedPtDrug );
		})
	},

	findOne( req, res, next ) {
		PtDrug.findById( req.params.id )
		.populate( `drug`, `brand generic strength active vialType` )
		.exec( ( err, populatedPtDrug ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( populatedPtDrug );
		} );
	},

	update( req, res, next ) {
		PtDrug.findByIdAndUpdate( req.params.id, req.body, { new: true }, ( err, ptDrug ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( ptDrug );
		} )
	},

	create( req, res ) {
		console.log( 'req', req.body );
		new PtDrug( req.body ).save( ( err, newPtDrug ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			console.log( 'new drug', newPtDrug );
			Patient.findByIdAndUpdate( newPtDrug.patient, { $push: { drugs: newPtDrug._id } }, ( err, pat ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
			} );
			return res.status( 201 ).json( newPtDrug );
		} )
	},

	delete( req, res, next ) {
		PtDrug.findByIdAndRemove( req.params.id, ( err, deletedPtDrug ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( deletedPtDrug );
		})
	}
 
}