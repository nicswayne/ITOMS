const mongoose = require( mongoose );
const updated = require( '../updated/Updated' );

const Implants = new mongoose.Schema( {

	brand: { type: String, required: true },
	size: { type: String, required: true },
	reference: { type: String, required: true },
	rep: { type: mongoose.Schema.Types.ObjectId, ref: `Reps` },
	orders: [ { type: mongoose.Schema.Types.ObjectId, ref: `Orders` } ],
	onHand: { type: Number, min: 0 },
	minOnHand: { type: Number, min: 0 },
	nextReorderDate: { type: Date },
	updated: updated,
	active: { type: Boolean, default: true }

};

module.exports = mongoose.model( 'Implants', Implants );

//linked to ptImplants, inventory