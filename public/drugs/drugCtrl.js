angular.module( 'ITOMS' )
.controller( 'drugCtrl', function( $scope, drugSrv, $state, loginSrv ) {

	getDrugs = () => {
		drugSrv.getAllDrugs()
		.then( res => {
			$scope.allDrugs = res;
		} );
	};

	$scope.getRep = ( repId ) => {
		$state.go( `rep`, { 'id': repId } );
	};

	$scope.goToUpdateDrug = ( id ) => {
		if ( loginSrv.hasRight( `updateDrug` ) ) {
			$state.go( `drugInfo`, { id } );
		}
	};

	$scope.goToCreateDrug = () => {
		if ( loginSrv.hasRight( `createDrug` ) ) {
			$state.go( `drugInfo`, { 'id': `create` } );
		}
	}

	getDrugs();

} );
