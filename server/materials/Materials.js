const mongoose = require( 'mongoose' );
const updated = require( '../updated/Updated' );

const Materials = new mongoose.Schema( {

	name: { type: String, required: true, trim: true },
	desc: { type: String },
	qty: { type: Number, min: 0, required: true },
	qtyType: { type: String, enum: [ 'boxes', 'vials', 'units', 'packs', 'items' ] },
	minQty: { type: Number },
	reorderInterval: { type: Number },
	intervalType: { type: String, enum: [ 'days', 'weeks', 'months', 'years' ] },
	nextReorderDate:{ type: Date },
	rep: { type: mongoose.Schema.Types.ObjectId, ref: `Reps` },
	orders: [ { type: mongoose.Schema.Types.ObjectId, ref: `Orders` } ],
	updated: updated,
	active: { type: Boolean, default: true }

} );

module.exports = mongoose.model( 'Materials', Materials );

// linked to inventory