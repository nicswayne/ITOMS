const Referral = require( './Referrals' );

module.exports = {

	find( req, res, next ) {
		Referral.find( { } )
		.populate( `patients` )
		.populate( `notes`, `date desc body` )
		.exec( ( err, populatedReferral ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( populatedReferral );
		})
	},

	findOne( req, res, next ) {
		Referral.findById( req.params.id )
		.populate( `patients` )
		.populate( `notes`, `date desc body` )
		.exec( ( err, populatedReferral ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( populatedReferral );
		})
	},

	update( req, res, next ) {
		Referral.findByIdAndUpdate( req.params.id, req.body, ( err, referral ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( referral );
		} )
	},

	create( req, res, next ) {
		new Referral( req.body ).save( ( err, newReferral ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 201 ).json( newReferral );
		})
	},

	delete( req, res, next ) {
		Referral.findByIdAndRemove( req.params.id, ( err, deletedReferral ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( deletedReferral );
		})
	},

	deleteNote( req, res, next ) {
		Patient.findById( req.params.PatientId, ( err, patient ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			patient.notes.id( req.params.noteId, ( err, note ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				note.remove( ( err, deletedNote ) => {
					if ( err ) {
						return res.status( 500 ).json( err );
					}
					return res.status( 200 ).json( deletedNote );
				})
			})
		})
	}
 
}