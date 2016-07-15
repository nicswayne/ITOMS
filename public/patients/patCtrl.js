angular.module( 'ITOMS' )
.controller( 'patCtrl', function( patSrv, $scope, $stateParams, $state, loginSrv, referralSrv ) {

	getPatient = ( id ) => {
		if ( id.id === `create` ) {
			$scope.showUpdateForm = true;
			return;
		}
		patSrv.getPatient( id )
			.then( ( response ) => {
				// console.log( 'pat', response );
				$scope.patient = response;
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

	$scope.clear = () => {
		if( $stateParams.id === `create` ) {
			$state.go( `patients` );
			return;
		}
		$state.go( $state.current, { 'id': $stateParams.id }, { reload: true } );
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
			} )
			// console.log( 'obj array', obj );
			patSrv.updatePatient( $stateParams.id, obj )
				.then( res => {
					$state.go( $state.current, { 'id': res._id }, { reload: true } );
				} );
			return;
			}
	
	};

	getPatient( $stateParams );
	$scope.show = false;

} );
