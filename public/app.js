angular.module( 'ITOMS', [ 'ui.router' ])
.config( ( $stateProvider, $urlRouterProvider ) => {
	
	$urlRouterProvider.otherwise( 'home' );

	$stateProvider
		.state( 'home', {
			url: '/home',
			templateUrl: './home/home.html',
			controller: 'homeCtrl'
		})
		.state( 'login', {
			url: '/login',
			templateUrl: './login/login.html',
			controller: 'loginCtrl'
		})
		.state( 'implants', {
			url: '/implants',
			templateUrl: './implants/implants.html',
			controller: 'implantCtrl'
		})
		.state( 'implant', {
			url: '/implants/:id',
			templateUrl: './implants/implant.html',
			controller: 'implantCtrl'
		})
		.state( 'referrals', {
			url: '/referrals',
			templateUrl: './referrals/referrals.html',
			controller: 'referralCtrl'
		})
		.state( 'drugs', {
			url: '/drugs',
			templateUrl: './drugs/drugs.html',
			controller: 'drugCtrl'
		})
		.state( 'admin', {
			url: `/admin`,
			templateUrl: `./admin/admin.html`,
			controller: `adminCtrl`
		})
		.state( `patients`, {
			url: `/patients`,
			templateUrl: `./patients/patients.html`,
			controller: `patientCtrl`
		})
		.state( `materials`, {
			url: `/materials`,
			templateUrl: `./materials/materials.html`,
			controller: `materialCtrl`
		})
		.state( `boneGrafts`, {
			url: `/boneGrafts`,
			templateUrl: `./boneGrafts/boneGrafts.html`,
			controller: `boneGraftCtrl`
		})
})