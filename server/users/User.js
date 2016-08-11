const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcrypt-nodejs' );

const User = mongoose.Schema( {

	name: { type: String, required: true, trim: true },
	username: { type: String, unique: true, required: true, trim: true },
	password: { type: String, required: true, minLength: 8 },
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
	mergeReferrals: { type: Boolean, required: true },
	createPatient: { type: Boolean, required: true },
	createReferral: { type: Boolean, required: true },
	createRep: { type: Boolean, required: true },
	createDrug: { type: Boolean, required: true },
	createMaterial: { type: Boolean, required: true },
	createImplant: { type: Boolean, required: true },
	createNote: { type: Boolean, required: true },
	createPtImplant: { type: Boolean, required: true },
	createPtDrug: { type: Boolean, required: true }

} );

User.methods.generateHash = ( password ) => {
	return bcrypt.hashSync( password, bcrypt.genSaltSync( 8 ), null );
}

User.methods.validPassword = ( password, this.password ) => {
	return bcrypt.compareSync( password, this.password );
}

module.exports = mongoose.model( 'User', User );