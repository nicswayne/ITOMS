const mongoose = require( 'mongoose' );
const updated = require( '../updated/Updated' );

const PtDrugs = new mongoose.Schema( {

	patient: { type: mongoose.Schema.Types.ObjectId, ref: `Patients`, required: true },
	updated: updated,
	date: { type: Date, default: new Date },
	drug: { type: mongoose.Schema.Types.ObjectId, ref: `Drugs`, required: true },
	volumeUsed: { type: Number, required: true },
	volumeWasted: { type: Number }

} );

module.exports = mongoose.model( 'PtDrugs', PtDrugs );

//linked to patient
//updates drugs qty