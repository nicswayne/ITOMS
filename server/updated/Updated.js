const mongoose = require( mongoose );

const updated = new mongoose.Schema( {

	date: { type: Date, default: new Date },
	user: { type: mongoose.Schema.Types.ObjectId, ref: `Users` }

};

module.exports = updated;