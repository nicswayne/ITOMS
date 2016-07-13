const mongoose = require( 'mongoose' );
const updated = require( '../updated/Updated' );

const Patients = new mongoose.Schema( {

	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	address: { type: String },
	city: { type: String },
	state: { type: String },
	zip: { type: Number, minLength: 5, maxLength: 9 },
	ssn: { type: Number, minLength: 9, maxLength: 9 },
	DOB: { type: Date },
	gender: { type: String, enum: [ `Male`, `Female` ] },
	phone: { type: String, minLength: 10 },
	cellPhone: { type: String, minLength: 10 },
	workPhone: { type: String, minLength: 10 },
	callCellOK: { type: Boolean },
	callWorkOK: { type: Boolean },
	leaveMessageOK: { type: Boolean },
	email: { type: String },
	referral: [ { type: mongoose.Schema.Types.ObjectId, ref: `Referrals`, required: true } ],
	// boneGrafts: [ { type: mongoose.Schema.Types.ObjectId, ref: `PtBoneGrafts` } ]
	implants: [ { type: mongoose.Schema.Types.ObjectId, ref: `PtImplants` } ],
	drugs: [ { type: mongoose.Schema.Types.ObjectId, ref: `PtDrugs` } ],
	updated: updated


} );

module.exports = mongoose.model( 'Patients', Patients );


// linked to referrals