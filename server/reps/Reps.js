const mongoose = require( 'mongoose' );

const Reps = new mongoose.Schema( {

	companies: [ { type: String } ],
	name: { type: String, required: true, trim: true },
	phone: { type: Number, minLength: 10 },
	fax: { type: Number, minLength: 10 },
	email: { type: String, unique: true },
	active: { type: Boolean, default: true },
	notes: [ { type: mongoose.Schema.Types.ObjectId, ref: `Notes` } ],
	materials: [ { type: mongoose.Schema.Types.ObjectId, ref: `Materials` } ],
	implants: [ { type: mongoose.Schema.Types.ObjectId, ref: `Implants` } ],
	drugs: [ { type: mongoose.Schema.Types.ObjectId, ref: `Drugs` } ]
	// boneGrafts: { type: mongoose.Schema.Types.ObjectId, ref: `boneGrafts` }

} );

module.exports = mongoose.model( 'Reps', Reps );


//linked to implants, boneGrafts, materials