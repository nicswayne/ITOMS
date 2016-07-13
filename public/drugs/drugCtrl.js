angular.module( 'ITOMS' )
.controller( 'drugCtrl', function( $scope, drugSrv, $state ) {

	getDrugs = () => {
		drugSrv.getAllDrugs()
		.then( res => {
			$scope.allDrugs = res;
			console.log( 'drugs', res );
		} );
	};

	$scope.goToUpdateDrug = ( id ) => {
		$state.go( `drugInfo`, { id } );
	};

	$scope.goToCreateDrug = () => {
		$state.go( `drugInfo`, { 'id': `create` } );
	}

	getDrugs();

} );
