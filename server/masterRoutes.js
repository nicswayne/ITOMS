const userRoutes = require( './users/userRoutes' );
const drugRoutes = require( './drugs/drugRoutes' );
const orderRoutes = require( './Orders/orderRoutes' );
const implantRoutes = require( './implants/implantRoutes' );
const materialRoutes = require( './materials/materialRoutes' );
const noteRoutes = require( './notes/noteRoutes' );
const repRoutes = require( './reps/repRoutes' );
const referralRoutes = require( './referrals/referralRoutes' );
const patientRoutes = require( './patients/patientRoutes' );
const ptImplantRoutes = require( './ptImplants/ptImplantRoutes' );
const ptDrugRoutes = require( './ptDrugs/ptDrugRoutes' );

module.exports = ( app ) => {

	userRoutes( app );
	drugRoutes( app );
	orderRoutes( app );
	implantRoutes( app );
	materialRoutes( app );
	noteRoutes( app );
	repRoutes( app );
	referralRoutes( app );
	patientRoutes( app );
	ptImplantRoutes( app );
	ptDrugRoutes( app );

}