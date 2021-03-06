const mongoose = require( 'mongoose' );
const updated = require( '../updated/Updated' );

const Materials = new mongoose.Schema( {

	name: { type: String, required: true, trim: true },
	desc: { type: String },
	onHand: { type: Number, min: 0, required: true },
	qtyType: { type: String, enum: [ `boxes`, `vials`, `units`, `packs`, `items` ] },
	minOnHand: { type: Number },
	reorderInterval: { type: Number },
	intervalType: { type: String, enum: [ `days`, `weeks`, `months`, `years` ] },
	intervalQty: { type: Number },
	nextReorderDate: { type: Date },
	rep: { type: mongoose.Schema.Types.ObjectId, ref: `Reps` },
	orders: [ { type: mongoose.Schema.Types.ObjectId, ref: `Orders` } ],
	updated: updated,
	active: { type: Boolean, default: true }

} );

module.exports = mongoose.model( 'Materials', Materials );

// linked to inventory and rep