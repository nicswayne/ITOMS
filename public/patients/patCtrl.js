angular.module( 'ITOMS' )
.controller( 'patCtrl', function( patSrv, $scope, $stateParams, $state ) {

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

	$scope.clear = () => {
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
		patSrv.updatePatient( $stateParams.id, obj )
			.then( res => {
				$state.go( $state.current, { 'id': res._id }, { reload: true } );
			} );
	};

	getPatient( $stateParams );
	$scope.show = false;

} );
