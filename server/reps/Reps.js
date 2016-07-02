const mongoose = require( mongoose );

const Reps = new mongoose.Schema( {

	companies: [ { type: String } ],
	name: { type: String, required: true, trim: true },
	phone: { type: Number },
	fax: { type: Number },
	email: { type: String, unique: true },
	active: { type: Boolean, default: true },
	notes: [ { type: mongoose.Schema.Types.ObjectId, ref: `Notes` } ]

};

module.exports = mongoose.model( 'Reps', Reps );


//linked to implants, boneGrafts, materials