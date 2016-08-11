const Inventory = require( './Inventory' );
const Orders = require( '../orders/Orders' );
// const Reps = require( '../reps/Reps' );

module.exports = {

	find( req, res ) {
		Inventory.find( { } )
		.populate( `implants` )
		.populate( `drugs` )
		.populate( `materials` )
		.exec( ( err, inventory ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			Orders.populate( inventory, {
				path: `drugs.orders implants.orders materials.orders`,
				select: `orderDate qty updated`
			},  
			( err, populatedOrders ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}
				// console.log("new inventory", inventory.drugs);
				// Reps.populate( populatedOrders, {
				// 	path: `drugs.rep implants.rep materials.rep`,
				// 	select: `name phone email fax`
				// },
				// ( err, populatedInventory ) => {
				// 	if ( err ) {
				// 		return res.status( 500 ).json( err );
				// 	}
					return res.status( 200 ).json( populatedOrders );
				// } );
			} );
		} );
	},
	create( req, res ) {
		new Inventory( req.body ).save( ( err, inventory ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}
			return res.status( 201 ).json( inventory );
		})
	}
}