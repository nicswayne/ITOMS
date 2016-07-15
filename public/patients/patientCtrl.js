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

	$scope.selection = {
		options: [
			{
				name: `firstName`,
				value: `firstName`
			},
			{
				name: `lastName`,
				value: `lastName`
			},
			{
				name: `date of birth`,
				value: `DOB`
			},
			{
				name: `social security number`,
				value: `ssn`
			},
			{
				name: `phone number`,
				value: `phoneNumber`
			}
		],

		filter: { 
			name: `lastName`,
			value: `lastName`
		}
	}

	$scope.show = false;


} );
