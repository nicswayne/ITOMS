const Order = require( './Orders' );

module.exports = {

	find( req, res, next ) {
		Order.find( { } )
		.populate( `rep`, `name phone fax email` )
		.exec( (err, populatedOrders ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( populatedOrders );
		})
	},

	findOne( req, res, next ) {
		Order.findById( req.params.id )
		.populate( `rep`, `name phone fax email` )
		.exec( (err, populatedOrder ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( populatedOrder );
		})
	},

	update( req, res, next ) {
		Order.findByIdAndUpdate( req.params.id, req.body, ( err, order ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( order );
		} )
	},

	create( req, res, next ) {
		new Order( req.body ).save( ( err, newOrder ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 201 ).json( newOrder );
		})
	},

	delete( req, res, next ) {
		Order.findByIdAndRemove( req.params.id, ( err, deletedOrder ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( deletedOrder );
		})
	}
}