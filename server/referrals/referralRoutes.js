const referralCtrl = require( './referralCtrl' );

module.exports = app => {

	app.get( `/:practice/referrals`, referralCtrl.find );
	app.get( `/:practice/referrals/:id`, referralCtrl.findOne );
	app.put( `/:practice/referrals/:id`, referralCtrl.update );
	app.post( `/:practice/referrals`, referralCtrl.create );
	app.delete( `/:practice/referrals/:id`, referralCtrl.delete );

};