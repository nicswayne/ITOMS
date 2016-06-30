const mongoose = require( mongoose );

const Materials = new mongoose.Schema( {

	name: { type: String, required: true, trim: true },
	desc: { type: String },
	qty: { type: Number },
	qtyType: { type: String, enum: [ 'boxes', 'vials', 'units', 'packs', 'items' ] },
	minQty: { type: Number },
	reorderInterval: { type: Number },
	intervalType: { type: String, enum: [ 'days', 'weeks', 'months', 'years' ] },
	orders: [ { type: mongoose.Schema.Types.ObjectId, ref: `Orders` } ],
	updated: { type: Date, default: new Date }updated: {
		date: { type: Date, default: new Date },
		user: { type: mongoose.Schema.Types.ObjectId, ref: `Users` }
	}

}

module.exports = mongoose.model( 'Materials', Materials );