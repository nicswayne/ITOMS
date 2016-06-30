const mongoose = require( mongoose );

const Drugs = new mongoose.Schema( {

	brand: { type: String, unique: true, trim: true },
	generic: { type: String, unique: true, trim: true },
	strength: { type: String },
	vialSize: { type: Number },
	vialType: { type: String, enum: [ 'cc', 'ml', 'G', 'L' ] },
	remainingVol: { type: Number, min: 0 },
	onHand: { type: Number, min: 0, default: 0 },
	minOnHand: { type: Number, min: 0, default: 0 },
	orders: [ { type: mongoose.Schema.Types.ObjectId, ref: `Orders` } ],
	updated: {
		date: { type: Date, default: new Date },
		user: { type: mongoose.Schema.Types.ObjectId, ref: `Users` }
	},
	active: { type: Boolean, default: true }


};

module.exports = mongoose.model( 'Drugs', Drugs );