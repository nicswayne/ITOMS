const Inventory = require( './Inventory' );

module.exports = {

	find( req, res, next ) {
		Inventory.find( { } )
		.populate( `implants` )
		.populate( `drugs` )
		.populate( `materials` )
		.exec( ( err, inventory ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( inventory );
		})
	},
	create( req, res, next ) {
		new Inventory( req.body ).save( ( err, inventory ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 201 ).json( inventory );
		})
	}
}