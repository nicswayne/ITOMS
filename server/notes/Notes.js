const mongoose = require( mongoose );
const updated = require( '../updated/Updated' );

const Notes = new mongoose.Schema( {

	type: { type: String, enum: [ 'Referral', 'Rep' ], required: true },
	date: { type: Date },
	desc: { type: String, required: true },
	body: { type: String, required: true },
	updated: updated

};

module.exports = mongoose.model( 'Notes', Notes );

// linked to referrals and reps