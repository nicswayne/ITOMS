const mongoose = require( mongoose );
const updated = require( '../updated/Updated' );

const PtImplants = new mongoose.Schema( {

	updated: updated,
	implant: { type: mongoose.Schema.Types.ObjectId, ref: `Implants`, required: true },
	tooth: { type: Number, min: 1, max: 32 },
	lot: { type: String, required: true },
	insertionDate: { type: Date, required: true },
	removalDate: { type: Date },
	protheticDate: { type: Date },
	healingAbutmentDate: { type: Date },
	referral: { type: mongoose.Schema.Types.ObjectId, ref: `Referral` },
	boneQty: { type: String, enum: [ ``, `` ] },
	boneQlty:{ type: String, enum: [ ``, `` ] },
	boneStatus:{ type: String, enum: [ ``, `` ] },
	prostheticType: { type: String, enum: [ `endentulous`, `bridge`, `prothetic`, `single` ] }

};


module.exports = mongoose.model( 'PtImplants', PtImplants );


// linked to patients
// updates implants