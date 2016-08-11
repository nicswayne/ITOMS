const referralCtrl = require( './referralCtrl' );
const userCtrl = require( '../users/userCtrl' );

module.exports = app => {

	app.get( `/api/referrals`,userCtrl.isLoggedIn, referralCtrl.find );
	app.get( `/api/referrals/:id`,userCtrl.isLoggedIn, referralCtrl.findOne );
	app.put( `/api/referrals/:id`,userCtrl.isLoggedIn, referralCtrl.update );
	app.post( `/api/referrals`,userCtrl.isLoggedIn, referralCtrl.create );
	app.delete( `/api/referrals/:id`,userCtrl.isLoggedIn, referralCtrl.delete );
	app.delete( `/api/referrals/:refId/:noteId`,userCtrl.isLoggedIn, referralCtrl.deleteNote );

};