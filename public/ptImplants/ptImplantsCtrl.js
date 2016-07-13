angular.module( 'ITOMS' )
.controller( 'ptImplantCtrl', function( $scope, $stateParams, $state, patSrv ) {

	getPatient = ( id ) => {
		console.log( 'id', id )
		patSrv.getPatient( id )
			.then( ( response ) => {
				console.log( 'patient', response );
				$scope.patient = response[ 0 ];
			} );
	};

	getPatient( $stateParams );

} );
