angular.module( 'ITOMS' )
.controller( 'patCtrl', function( patSrv, $scope, $stateParams, $state, loginSrv, referralSrv, impSrv, drugSrv, ptImpSrv, ptDrugSrv ) {

	getPatient = ( id ) => {
		if ( id.id === `create` ) {
			$scope.showUpdateForm = true;
			return;
		}
		patSrv.getPatient( id )
			.then( ( response ) => {
				console.log( 'pat', response );
				$scope.patient = response;
			} );
	};

	getImplants = () => {
		impSrv.getAllImplants()
				.then( ( res ) => {
					$scope.impOptions = res;	
				} );
	};

	getDrugs = () => {
		drugSrv.getAllDrugs()
			.then( ( res ) => {
				$scope.drugOptions = res;
			} );
	};

	$scope.addExistingRef = () => {
		if ( loginSrv.hasRight( `updatePatient` ) ) {
			$scope.showRefs = !$scope.showRefs;
			referralSrv.getReferrals()
				.then( ( res ) => {
					$scope.referralOptions = res;
					// console.log( 'options', $scope.referralOptions );
				} );
		}
	};

	$scope.canUpdate = () => {
		if ( loginSrv.hasRight( `updatePatient` ) ) {
			$scope.showUpdateForm = !$scope.showUpdateForm;

		}
	};

	$scope.canCreatePtDrug = () => {
		if ( loginSrv.hasRight( `createPtDrug` ) ) {
			$scope.ptDrugCreate = !$scope.ptDrugCreate;
			getDrugs();
		}
	};

	$scope.canCreatePtImp = () => {
		if ( loginSrv.hasRight( `createPtImplant` ) ) {
			$scope.ptImplantCreate = !$scope.ptImplantCreate;
			getImplants();
		}
	};

	$scope.canUpdatePtImp = () => {
		if ( loginSrv.hasRight( `updatePtImplant` ) ) {
			$scope.showForm = !$scope.showForm;
			getImplants();
		}
	};
	$scope.canUpdatePtDrug = () => {
		if ( loginSrv.hasRight( `updatePtDrug` ) ) {
			$scope.showDrugForm = !$scope.showDrugForm;
			getDrugs();
		}
	};

	$scope.clear = () => {
		if( $stateParams.id === `create` ) {
			$state.go( `patients` );
			return;
		}
		$state.go( $state.current, { 'id': $stateParams.id }, { reload: true } );
	};

	$scope.createPtDrug = ( obj ) => {
		if ( loginSrv.hasRight( `createPtDrug` ) ) {
			if ( !obj.date ) {
				obj.date = new Date();
			}
			obj.patient = $stateParams.id;
			obj.updated = { date: new Date() };
			// console.log( 'drug obj', obj );
			ptDrugSrv.createPtDrug( obj )
			.then( res => {
					$state.go( $state.current, { 'id': $stateParams.id }, { reload: true } );
				} );
		}
	};

	$scope.createPtImplant = ( obj ) => {
		if ( loginSrv.hasRight( `createPtImplant` ) ) {
			if ( !obj.insertionDate ) {
				obj.insertionDate = new Date();
			}
			obj.patient = $stateParams.id;
			obj.updated = { date: new Date() };
			console.log( 'imp obj', obj );
			ptImpSrv.createPtImp( obj )
			.then( res => {
					$state.go( $state.current, { 'id': $stateParams.id }, { reload: true } );
				} );
		}
	};

	$scope.getPtImplantInfo = ( ptImplantId ) => {
		$state.go( `ptImplant`, { 'ptId': $stateParams.id, ptImplantId } );
	};

	$scope.getPtDrug = ( ptDrugId ) => {
		$state.go( `ptDrug`, { 'ptId': $stateParams.id, ptDrugId } );
	};

	$scope.getReferral = ( id ) => {
		$state.go( `ref`, { 'id': id } );
	};

	$scope.updatePatientInfo = ( obj ) => {
		if ( $stateParams.id === `create` ) {
			patSrv.createPatient( obj )
			.then( res => {
				$state.go( $state.current, { 'id': res._id }, { reload: true } );
			} );
			return;
		}
		else if ( loginSrv.hasRight( `updatePatient` ) ) {
			// console.log( 'objref', obj.referral );
			obj.referral = [ obj.referral ];
			$scope.patient.referral.forEach( val => {
				obj.referral.push( val );
			} );
			patSrv.updatePatient( $stateParams.id, obj )
				.then( res => {
					$state.go( $state.current, { 'id': res._id }, { reload: true } );
				} );
			return;
			}
	
	};

	getPatient( $stateParams );

} );
