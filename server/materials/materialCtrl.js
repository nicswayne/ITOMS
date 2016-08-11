const Material = require( './Materials' );
const Order = require( '../Orders/Orders' )

module.exports = {

	find( req, res ) {
		Material.find( { } )
		.populate( `updated.user`, 'name userName' )
		.populate( `rep`, `name phone fax email` )
		.populate( `orders` )
		.exec( (err, populatedMaterials ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( populatedMaterials );
		})
	},

	findOne( req, res ) {
		Material.findById( req.params.id )
		.populate( `updated.user`, 'name userName' )
		.populate( `rep`, `name phone fax email` )
		.populate( `orders` )
		// .populate( {
		// 	path: `orders.updated.user`,
		// 	select: `user`,
		// 	model: Order
		// } )
		// .populate( `rep` )
		.exec( (err, populatedMaterials ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( populatedMaterials );
		})
	},

	update( req, res ) {
		Material.findByIdAndUpdate( req.params.id, req.body, ( err, material ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( material );
		} )
	},

	create( req, res ) {
		console.log( req.body );
		new Material( req.body ).save( ( err, newMaterial ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 201 ).json( newMaterial );
		})
	},

	delete( req, res, next ) {
		Material.findByIdAndRemove( req.params.id, ( err, deletedMaterial ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 200 ).json( deletedMaterial );
		})
	},

	deleteOrder( req, res, next ) {
		Material.findById( req.params.MaterialId, ( err, material ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			material.orders.id( req.params.orderId, ( err, order ) => {
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