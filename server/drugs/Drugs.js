const mongoose = require( 'mongoose' );
const updated = require( '../Updated/Updated' );

const Drugs = new mongoose.Schema( {

	brand: { type: String, unique: true, trim: true },
	generic: { type: String, unique: true, trim: true },
	strength: { type: String },
	vialSize: { type: Number },
	vialType: { type: String, enum: [ 'cc', 'ml', 'G', 'L' ] },
	remainingVol: { type: Number, min: 0 },
	onHand: { type: Number, min: 0, default: 0 },
	minOnHand: { type: Number, min: 0, default: 0 },
	nextReorderDate: { type: Date },
	orders: [ { type: mongoose.Schema.Types.ObjectId, ref: `Orders` } ],
	updated: updated,
	active: { type: Boolean, default: true },
	rep: { type: mongoose.Schema.Types.ObjectId, ref: `Reps` }


} );

module.exports = mongoose.model( 'Drugs', Drugs );


// linked to ptDrugs, inventory