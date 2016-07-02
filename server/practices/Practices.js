const mongoose = require( mongoose );

const Practice = new mongoose.Schema( {

	name: { type: String, required: true, unique: true },
	address: { type: String },
	city: { type: String },
	state: { type: String },
	zip: { type: Number },
	providers: [ { type: String, required: true } ]
	paymentHistory: [ {
		date: { type: Date },
		amount: { type: Number },
		user: { type: mongoose.Schema.Types.ObjectId, ref: `Users` },
		paymentMethod: { type: String }
	} ],
	active: { type: Boolean, default: false }

};

module.exports = mongoose.model( 'Practice', Practice );

// linked to users