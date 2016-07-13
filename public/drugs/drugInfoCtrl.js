angular.module( 'ITOMS' )
.controller( 'drugInfoCtrl', function( $scope, drugSrv, $state, $stateParams ) {

	getDrugInfo = ( id ) => {
		if ( id.id === `create` ) {
			return;
		}
		drugSrv.getOneDrug( id )
			.then( ( res ) => {
				$scope.drugInfo = res;
			} );
	};

	$scope.goToUpdateDrug = ( id ) => {
		$state.go( `drugInfo`, { id } );
	};

	$scope.updateDrugInfo = ( obj ) => {
		drugSrv.updateDrug( obj, $stateParams )
		.then( res => {
			$state.go( $state.current, { 'id': res._id }, { reload: true } );
		} );
	};

	$scope.createDrug = ( obj ) => {
		drugSrv.createDrug( obj )
			.then( res => {
				$state.go( $state.current, { 'id': res._id }, { reload: true } );
			} );
	};
	$scope.params = $stateParams.id !== `create`;

	getDrugInfo( $stateParams );

} );
