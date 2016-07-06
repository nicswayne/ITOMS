const Rep = require( './Reps' );

module.exports = {

	find( req, res, next ) {
		Rep.find( { } )
		.populate( `notes`, `date desc body` )
		.populate( `materials`, `name desc nextReorderDate qty` )
		.populate( `implants`, `brand size reference onHand nextReorderDate` )
		.populate( `drugs`, `brand generic strength vialSize onHand nextReorderDate remainingVol` )
		.exec( ( err, populatedRep ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( populatedRep );
		})
	},

	findOne( req, res, next ) {
		Rep.findById( req.params.id )
		.populate( `notes`, `date desc body` )
		.populate( `materials`, `name desc nextReorderDate qty` )
		.populate( `implants`, `brand size reference onHand nextReorderDate` )
		.populate( `drugs`, `brand generic strength vialSize onHand nextReorderDate remainingVol` )
		.exec( ( err, populatedRep ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( populatedRep );
		})
	},

	update( req, res, next ) {
		Rep.findByIdAndUpdate( req.params.id, req.body, ( err, rep ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( rep );
		} )
	},

	create( req, res, next ) {
		new Rep( req.body ).save( ( err, newRep ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 201 ).json( newRep );
		})
	},

	delete( req, res, next ) {
		Rep.findByIdAndRemove( req.params.id, ( err, deletedRep ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( deletedRep );
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