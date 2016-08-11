const mongoose = require( 'mongoose' );
const updated = require( '../updated/Updated' );

const Notes = new mongoose.Schema( {

	date: { type: Date, default: new Date() },
	desc: { type: String, required: true },
	body: { type: String, required: true },
	refId: { type: mongoose.Schema.Types.ObjectId, ref: `Referrals` },
	repId: { type: mongoose.Schema.Types.ObjectId, ref: `Reps` },
	updated: updated

} );

module.exports = mongoose.model( 'Notes', Notes );

// linked to referrals and reps