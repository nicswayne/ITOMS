const mongoose = require( 'mongoose' );

const User = mongoose.Schema( {

	name: { type: String, required: true, trim: true },
	userName: { type: String, unique: true, required: true, trim: true },
	password: { type: String, required: true, trim: true, min: 8 },
	// practice: { type: mongoose.Schema.Types.ObjectId, ref: `Practice` },
	active: { type: Boolean, default: true },
	isAdmin: { type: Boolean, default: true },
	deletePtImplant: { type: Boolean, required: true },
	deletePtDrug: { type: Boolean, required: true },
	deletePtBoneGraft: { type: Boolean, required: true },
	deleteNotes: { type: Boolean, required: true },
	deActivateReferral: { type: Boolean, required: true },
	deActivateRep: { type: Boolean, required: true },
	deActivatePatient: { type: Boolean, required: true },
	deActivateDrug: { type: Boolean, required: true },
	deActivateImplant: { type: Boolean, required: true },
	deActivateMaterial: { type: Boolean, required: true },
	updateImplant: { type: Boolean, required: true },
	updateDrug: { type: Boolean, required: true },
	updateMaterial: { type: Boolean, required: true },
	updateBoneGraft: { type: Boolean, required: true },
	updatePatient: { type: Boolean, required: true },
	updateReferral: { type: Boolean, required: true },
	updateRep: { type: Boolean, required: true },
	updateNote: { type: Boolean, required: true },
	updatePtDrug: { type: Boolean, required: true },
	updatePtImplant: { type: Boolean, required: true },
	updatePtBoneGraft: { type: Boolean, required: true },
	mergePatient: { type: Boolean, required: true },
	mergeReferrals: { type: Boolean, required: true }

} );

module.exports = mongoose.model( 'User', User );