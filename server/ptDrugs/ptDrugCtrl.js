const PtDrug = require( './PtDrugs' );

module.exports = {

	find( req, res, next ) {
		PtDrug.find( { } )
		.populate( `drug` )
		.exec( ( err, populatedPtDrug ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( populatedPtDrug );
		})
	},

	findOne( req, res, next ) {
		PtDrug.findById( req.params.id, (err, ptDrug ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( ptDrug );
		})
	},

	update( req, res, next ) {
		PtDrug.findByIdAndUpdate( req.params.id, req.body, ( err, ptDrug ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( ptDrug );
		} )
	},

	create( req, res, next ) {
		new PtDrug( req.body ).save( ( err, newPtDrug ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 201 ).json( newPtDrug );
		})
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