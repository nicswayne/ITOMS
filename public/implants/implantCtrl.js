angular.module( 'ITOMS' )
.controller( 'implantCtrl', function( $scope, impSrv, $state, loginSrv ) {

	getImplants = () => {
		impSrv.getAllImplants()
		.then( res => {
			$scope.allImplants = res;
		} );
	};
	
	$scope.getRep = ( repId ) => {
		$state.go( `rep`, { 'id': repId } );
	};

	$scope.goToUpdateImplant = ( id ) => {
		if ( loginSrv.hasRight( `updateImplant` ) ) {
			$state.go( `implantInfo`, { id } );
		}
	};

	$scope.goToCreateImplant = () => {
		if ( loginSrv.hasRight( `createImplant` ) ) {
			$state.go( `implantInfo`, { 'id': `create` } );
		}
	}

	getImplants();

} );
