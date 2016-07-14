angular.module( 'ITOMS', [ 'ui.router', 'ngCookies' ] )
.config( ( $stateProvider, $urlRouterProvider ) => {
	
	$urlRouterProvider.otherwise( `home` );

	$stateProvider
		.state( `home`, {
			url: `/home`,
			templateUrl: `./home/home.html`,
			controller: `homeCtrl`
		} )
		.state( `login`, {
			url: `/login`,
			templateUrl: `./login/login.html`,
			controller: `loginCtrl`
		} )
		.state( `implants`, {
			url: `/implants`,
			templateUrl: `./implants/implants.html`,
			controller: `implantCtrl`
		} )
		.state( `implantInfo`, {
			url: `/implant/:id`,
			templateUrl: `./implants/implant.html`,
			controller: `implantInfoCtrl`
		} )
		.state( `referrals`, {
			url: `/referrals`,
			templateUrl: `./referrals/referrals.html`,
			controller: `referralCtrl`
		} )
		.state( `ref`, {
			url: `/referrals/:id`,
			templateUrl: `./referrals/referral.html`,
			controller: `refCtrl`
		} )
		.state( `drugs`, {
			url: `/drugs`,
			templateUrl: `./drugs/drugs.html`,
			controller: `drugCtrl`
		} )
		.state( `drugInfo`, {
			url: `/drugs/:id`,
			templateUrl: `./drugs/drugInfo.html`,
			controller: `drugInfoCtrl`
		} )
		.state( `admin`, {
			url: `/admin`,
			templateUrl: `./admin/admin.html`,
			controller: `adminCtrl`
		} )
		.state( `patients`, {
			url: `/patients`,
			templateUrl: `./patients/patients.html`,
			controller: `patientCtrl`
		} )
		.state( `pat`, {
			url: `/patients/:id`,
			templateUrl: `./patients/patient.html`,
			controller: `patCtrl`
		} )
		.state( `materials`, {
			url: `/materials`,
			templateUrl: `./materials/materials.html`,
			controller: `materialCtrl`
		} )
		.state( `materialInfo`, {
			url: `/material/:id`,
			templateUrl: `./materials/materialInfo.html`,
			controller: `materialInfoCtrl`
		} )
		.state( `boneGrafts`, {
			url: `/boneGrafts`,
			templateUrl: `./boneGrafts/boneGrafts.html`,
			controller: `boneGraftCtrl`
		} )
		.state( `reps`, {
			url: `/reps`,
			templateUrl: `./reps/reps.html`,
			controller: `repCtrl`
		} )
		.state( `rep`, {
			url: `/rep/:id`,
			templateUrl: `./reps/rep.html`,
			controller: `repInfoCtrl`
		} )
		.state( `ptImplants`, {
			url: `/ptImplants/:id`,
			templateUrl: `./ptImplants/ptImplants.html`,
			controller: `ptImplantCtrl`
		} )
		// .state( `ptImplant`, {
		// 	url: `/ptImplants/:ptId/:ptImplantId`,
		// 	templateUrl: `./ptImplants/ptImplant.html`,
		// 	controller: `ptImplantInfoCtrl`
		// } )
		// .state( `ptDrugs`, {
		// 	url: `/ptDrugs/:id`,
		// 	templateUrl: `./ptDrugs/ptDrugs.html`,
		// 	controller: `ptDrugCtrl`
		// } )
		// .state( `ptDrug`, {
		// 	url: `/ptDrugs/:ptId/:ptDrugId`,
		// 	templateUrl: `./ptDrugs/ptDrug.html`,
		// 	controller: `ptDrugInfoCtrl`
		// } )
} )
.constant( 'server', `http://localhost:8888/api/` );
