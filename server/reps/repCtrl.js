const Rep = require( './Reps' );
const Implants = require( '../implants/Implants' );
const Drugs = require( '../drugs/Drugs' );
const Mats = require( '../materials/Materials' );

module.exports = {

	find( req, res ) {
		Rep.find( { } )
		.populate( `notes`, `date desc body` )
		.populate( `materials`, `name desc nextReorderDate qty` )
		.populate( `implants`, `brand size reference onHand minOnHand nextReorderDate` )
		.populate( `drugs` )
		.exec( ( err, populatedRep ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( populatedRep );
		} );
	},

	findOne( req, res ) {
		Rep.findById( req.params.id )
		.populate( `notes`, `date desc body` )
		.populate( `materials` )
		.populate( `implants`, `brand size reference onHand minOnHand nextReorderDate` )
		.populate( `drugs` )
		.exec( ( err, populatedRep ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( populatedRep );
		} );
	},

	update( req, res ) {
		Rep.findByIdAndUpdate( req.params.id, req.body, { new: true }, ( err, rep ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			if ( req.body.implants ) {
				console.log( 'rep implants', rep.implants );
				Implants.findByIdAndUpdate( rep.implants[ 0 ], { rep: rep._id }, ( err, imp ) => {
					if ( err ) {
						return res.status( 500 ).json( err );
					}
				} );
			}
			if ( req.body.drugs ) {
				Drugs.findByIdAndUpdate( rep.drugs[ 0 ], { rep: rep._id }, ( err, drug ) => {
					if ( err ) {
						return res.status( 500 ).json( err );
					}
				} );
			}
			if ( req.body.materials ) {
				Mats.findByIdAndUpdate( rep.materials[ 0 ], { reps: rep._id }, ( err, mats ) => {
					if ( err ) {
						return res.status( 500 ).json( err );
					}
				} );
			}
			return res.status( 200 ).json( rep );
		} );
	},

	create( req, res ) {
		new Rep( req.body ).save( ( err, newRep ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 201 ).json( newRep );
		} );
	},

	delete( req, res ) {
		Rep.findByIdAndRemove( req.params.id, ( err, deletedRep ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( deletedRep );
		} );
	},

	deleteNote( req, res ) {
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
				} );
			} );
		} );
	}
};
