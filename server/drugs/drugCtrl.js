const Drug = require( './Drugs' );

module.exports = {

	find( req, res, next ) {
		Drug.find( { } )
		.populate( `updated.user`, 'name userName' )
		.populate( `orders` )
		.populate( `rep`, `name phone fax email` )
		.exec( ( err, populatedDrugs ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( populatedDrugs );
		})
	},

	findOne( req, res, next ) {
		Drug.findById( req.params.id )
		.populate( `updated.user`, 'name userName' )
		.populate( `orders` )
		.populate( `rep`, `name phone fax email` )
		.exec( ( err, populatedDrugs ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( populatedDrugs );
		})
	},

	update( req, res, next ) {
		Drug.findByIdAndUpdate( req.params.id, req.body, ( err, drug ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( drug );
		} )
	},

	create( req, res, next ) {
		new Drug( req.body ).save( ( err, newDrug ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 201 ).json( newDrug );
		})
	},

	delete( req, res, next ) {
		Drug.findByIdAndRemove( req.params.id, ( err, deletedDrug ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( deletedDrug );
		})
	},

	deleteOrder( req, res, next ) {
		Drug.findById( req.params.drugId, ( err, drug ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			drug.orders.id( req.params.orderId, ( err, order ) => {
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
	//, findOrder( req, res, next ){
	// 	Drug.findById( req.params.drugId, ( err, drug ) => {
	// 		if ( err ) {
	// 			return res.status( 500 ).json( err );
	// 		}
	// 		drug.orders.findById( req.params.orderId, ( err, order ) => {
	// 			if ( err ) {
	// 				return res.status( 500 ).json( err );
	// 			}
	// 		})
	// 		// .populate( `updated.user`, 'name userName' )
	// 		// .exec( ( err, populatedOrder ) => {
	// 		// 	if ( err ) {
	// 		// 		return res.status( 500 ).json( err );
	// 		// 	}
	// 		// 	return res.status( 200 ).json( populatedOrder );
	// 		// })
	// 	})
	// }
 
}