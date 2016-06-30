const mongoose = require( mongoose );

const PtDrugs = new mongoose.Schema( {

	updated: {
		date: { type: Date, default: new Date },
		user: { type: mongoose.Schema.Types.ObjectId, ref: `Users` }
	},
	date: { type: Date, default: new Date },
	drug: { type: mongoose.Schema.Types.ObjectId, ref: `Drugs`, required: true },
	amountUsed: { type: Number, required: true },
	amountWasted: { type: Number }

};

module.exports = mongoose.model( 'PtDrugs', PtDrugs );