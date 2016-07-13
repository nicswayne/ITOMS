const Note = require( './Notes' );
const Referrals = require( '../referrals/Referrals' );
const Reps = require( '../reps/Reps' );

module.exports = {

	find( req, res, next ) {
		Note.find( { } )
		.populate( `updated.user`, 'name userName' )
		.exec( ( err, populatedNote ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( populatedNote );
		} );
	},

	findOne( req, res, next ) {
		Note.findById( req.params.id )
		.populate( `updated.user`, 'name userName' )
		.exec( ( err, populatedNote ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( populatedNote );
		} );
	},

	update( req, res, next ) {
		Note.findByIdAndUpdate( req.params.id, req.body, ( err, note ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( note );
		} );
	},

	createRef( req, res ) {
		new Note( req.body ).save( ( err, newNote ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			Referrals.findByIdAndUpdate( newNote.refId, { $push: { 'notes': newNote._id } }, ( err, note ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				return res.status( 201 ).json( note );
			} );
		} );
	},

	createRep( req, res ) {
		new Note( req.body ).save( ( err, newNote ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			Reps.findByIdAndUpdate( newNote.repId, { $push: { 'notes': newNote._id } }, ( err, note ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				return res.status( 201 ).json( note );
			} );
		} );
	},

	delete( req, res, next ) {
		Note.findByIdAndRemove( req.params.id, ( err, deletedNote ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( deletedNote );
		} );
	}
 
}