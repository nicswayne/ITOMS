const mongoose = require( mongoose );

const Patients = new mongoose.Schema( {

	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	address: { type: String },
	city: { type: String },
	state: { type: String },
	zip: { type: Number },
	ssn: { type: Number },
	gender: { type: String, enum: [ `Male`, `Female` ] },
	phone: { type: Number },
	cellPhone: { type: Number },
	callCellOK: { type: Boolean },
	leaveMessageOK: { type: Boolean },
	email: { type: String },
	referral: [ { type: mongoose.Schema.Types.ObjectId, ref: `Referrals`, required: true } ],
	// boneGrafts: [ { type: mongoose.Schema.Types.ObjectId, ref: `PtBoneGrafts` } ]
	implants: [ { type: mongoose.Schema.Types.ObjectId, ref: `PtImplants` } ],
	drugs: [ { type: mongoose.Schema.Types.ObjectId, ref: `PtDrugs` } ]


};

module.exports = mongoose.model( 'Patients', Patients );


// linked to referrals