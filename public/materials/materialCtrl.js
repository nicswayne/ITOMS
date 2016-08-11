angular.module( 'ITOMS' )
.controller( 'materialCtrl', function( $scope, materialSrv, $state, loginSrv ) {

	getMaterials = () => {
		materialSrv.getAllMaterials()
		.then( res => {
			$scope.allMaterials = res;
		} );
	};
	
	$scope.getRep = ( repId ) => {
		$state.go( `rep`, { 'id': repId } );
	};

	$scope.goToUpdateMaterial = ( id ) => {
		if ( loginSrv.hasRight( `updateMaterial` ) ) {
			$state.go( `materialInfo`, { id } );
		}
	};

	$scope.goToCreateMaterial = () => {
		if ( loginSrv.hasRight( `createMaterial` ) ) {
			$state.go( `materialInfo`, { 'id': `create` } );
		}
	}

	getMaterials();

} );
