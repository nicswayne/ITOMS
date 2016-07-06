const Implant = require( './Implants' );

module.exports = {

	find( req, res, next ) {
		Implant.find( { } )
		.populate( `updated.user`, 'name userName' )
		.populate( `orders` )
		.populate( `rep`, `name phone fax email` )
		// .populate( `rep` )
		.exec( (err, populatedImplants ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( populatedImplants );
		})
	},

	findOne( req, res, next ) {
		Implant.findById( req.params.id )
		.populate( `updated.user`, 'name userName' )
		.populate( `orders` )
		.populate( `rep`, `name phone fax email` )
		// .populate( `rep` )
		.exec( (err, populatedImplants ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( populatedImplants );
		})
	},

	update( req, res, next ) {
		Implant.findByIdAndUpdate( req.params.id, req.body, ( err, implant ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( implant );
		} )
	},

	create( req, res, next ) {
		new Implant( req.body ).save( ( err, newImplant ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 201 ).json( newImplant );
		})
	},

	delete( req, res, next ) {
		Implant.findByIdAndRemove( req.params.id, ( err, deletedImplant ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( deletedImplant );
		})
	},

	deleteOrder( req, res, next ) {
		Implant.findById( req.params.ImplantId, ( err, implant ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			implant.orders.id( req.params.orderId, ( err, order ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				order.remove( ( err, deletedOrder ) => {
					if ( err ) {
						return res.status( 500 ).json( err );
					}
					return res.status( 200 ).json( deletedOrder );
				})
			})
		})
	}
 
}