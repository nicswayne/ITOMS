const mongoose = require( mongoose );

const Notes = new mongoose.Schema( {

	type: { type: String, enum: [ 'Referral', 'Rep' ], required: true },
	date: { type: Date },
	desc: { type: String, required: true },
	body: { type: String, required: true },
	updated: {
		date: { type: Date, default: new Date },
		user: { type: mongoose.Schema.Types.ObjectId, ref: `Users` }
	}

};

module.exports = mongoose.model( 'Notes', Notes );