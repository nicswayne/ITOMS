const mongoose = require( mongoose );

const Referrals = new mongoose.Schema( {

	firstName: { type: String, requried: true, trim: true },
	lastName: { type: String, requried: true, trim: true },
	suffix: { type: String },
	practiceName: { type: String },
	locations: [ {
		locationName: { type: String, trim: true },
		address: { type: String },
		city: { type: String },
		state: { type: String },
		zip: { type: Number }
	} ],
	phone: { type: Number },
	fax: { type: Number },
	email: { type: String },
	patients: [ { type: mongoose.Schema.Types.ObjectId, ref: `Patients` } ],
	notes: [ { type: mongoose.Schema.Types.ObjectId, ref: `Notes` } ],
	active: { type: Boolean },
	updated: {
		date: { type: Date, default: new Date },
		user: { type: mongoose.Schema.Types.ObjectId, ref: `Users` }
	}


};

module.exports = mongoose.model( 'Referrals', Referrals );