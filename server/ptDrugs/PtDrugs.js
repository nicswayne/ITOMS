const mongoose = require( mongoose );
const updated = require( '../updated/Updated' );

const PtDrugs = new mongoose.Schema( {

	updated: updated,
	date: { type: Date, default: new Date },
	drug: { type: mongoose.Schema.Types.ObjectId, ref: `Drugs`, required: true },
	amountUsed: { type: Number, required: true },
	amountWasted: { type: Number }

};

module.exports = mongoose.model( 'PtDrugs', PtDrugs );

//linked to patient
//updates drugs qty