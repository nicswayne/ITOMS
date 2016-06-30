const mongoose = require( mongoose );

const Orders = new mongoose.Schema( {

	orderDate: { type: Date, required: true },
	updated: { type: Date, default: new Date },
	user: { type: mongoose.Schema.Types.ObjectId, ref: `Users`, required: true },
	qty: { type: Number, requied: true }

};

module.exports = mongoose.model( 'Orders', Orders );