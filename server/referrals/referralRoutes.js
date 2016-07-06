const referralCtrl = require( './referralCtrl' );

module.exports = app => {

	app.get( `/api/referrals`, referralCtrl.find );
	app.get( `/api/referrals/:id`, referralCtrl.findOne );
	app.put( `/api/referrals/:id`, referralCtrl.update );
	app.post( `/api/referrals`, referralCtrl.create );
	app.delete( `/api/referrals/:id`, referralCtrl.delete );
	app.delete( `/api/referrals/:refId/:noteId`, referralCtrl.deleteNote );

};