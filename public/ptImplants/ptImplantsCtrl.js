angular.module( 'ITOMS' )
.controller( 'ptImplantCtrl', function( $scope, $stateParams, $state, patSrv ) {

	getPatient = ( id ) => {
		patSrv.getPatient( id )
			.then( ( response ) => {
				$scope.patient = response[ 0 ];
			} );
	};

	getPatient( $stateParams );

} );
