const mongoose = require( mongoose );

const Users = new mongoose.Schema( {

	name: { type: String, required: true, trim: true },
	userName: { type: String, unique: true, required: true, trim: true },
	password: { type: String, required: true, trim: true, min: 8 },
	// practice: { type: mongoose.Schema.Types.ObjectId, ref: `Practice` },
	active: { type: Boolean, required: true }

};