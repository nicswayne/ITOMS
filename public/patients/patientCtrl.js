angular.module( 'ITOMS' )
.controller( 'patientCtrl', function( $scope, patSrv, $state ) {

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
		$state.go( `pat`, { 'id': `create` } );
	};

	$scope.goToUpdatePatient = ( id ) => {
		$state.go( `pat`, { id } );
	};

	$scope.getReferral = ( id ) => {
		$state.go( `ref`, { id } );
	};

	getPatients();
	$scope.show = false;


} );
