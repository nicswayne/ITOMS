angular.module( 'ITOMS' )
.controller( 'implantCtrl', function( $scope, impSrv, $state ) {

	getImplants = () => {
		impSrv.getAllImplants()
		.then( res => {
			$scope.allImplants = res;
			console.log( 'implants', res );
		} );
	};
	
	$scope.getRep = ( repId ) => {
		$state.go( `rep`, { 'id': repId } );
	};

	$scope.goToUpdateImplant = ( id ) => {
		$state.go( `implantInfo`, { id } );
	};

	$scope.goToCreateImplant = () => {
		$state.go( `implantInfo`, { 'id': `create` } );
	}

	getImplants();

} );
