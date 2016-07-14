angular.module( 'ITOMS' )
.controller( 'patientCtrl', function( $scope, patSrv, $state, loginSrv ) {

	getPatients = () => {
		patSrv.getAllPatients()
			.then( ( res ) => {
				$scope.patients = res;
			} );
	};

	$scope.goToPatient = ( id ) => {
		$state.go( `pat`, { id } );
	};

	$scope.goToNewPatient = () => {
		if ( loginSrv.hasRight( 'createPatient' ) ) {
			$state.go( `pat`, { 'id': `create` } );
		return;
		}
		return;
	};

	$scope.getReferral = ( id ) => {
		$state.go( `ref`, { id } );
	};

	getPatients();
	$scope.show = false;


} );
