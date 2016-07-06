const mongoose = require( 'mongoose' );
const updated = require( '../Updated/Updated' );

const Orders = new mongoose.Schema( {

	orderDate: { type: Date, required: true },
	updated: updated,
	qty: { type: Number, requied: true },
	rep: { type: mongoose.Schema.Types.ObjectId, ref: `Reps` }

} );

module.exports = mongoose.model( 'Orders', Orders );

// linked to drugs, implants, materials, boneGrafts