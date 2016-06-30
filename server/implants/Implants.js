const mongoose = require( mongoose );

const Implants = new mongoose.Schema( {

	brand: { type: String, required: true },
	size: { type: String, required: true },
	reference: { type: String, required: true },
	rep: { type: mongoose.Schema.Types.ObjectId, ref: `Reps` },
	orders: [ { type: mongoose.Schema.Types.ObjectId, ref: `Orders` } ],
	updated: {
		date: { type: Date, default: new Date },
		user: { type: mongoose.Schema.Types.ObjectId, ref: `Users` }
	},
	active: { type: Boolean, default: true }

};

module.exports = mongoose.model( 'Implants', Implants );