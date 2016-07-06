const mongoose = require( 'mongoose' );

const Inventory = new mongoose.Schema( {

	// practice = { type: mongoose.Schema.Types.ObjectId, ref: `Practice` },
	// boneGrafts = [ { type: mongoose.Schema.Types.ObjectId, ref: `boneGrafts` } ],
	implants: [ { type: mongoose.Schema.Types.ObjectId, ref: `Implants` } ],
	drugs: [ { type: mongoose.Schema.Types.ObjectId, ref: `Drugs` } ],
	materials: [ { type: mongoose.Schema.Types.ObjectId, ref: `Materials` } ]
	
} );

module.exports = mongoose.model( 'Inventory', Inventory );