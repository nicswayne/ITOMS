angular.module( 'ITOMS' )
.controller( 'materialCtrl', function( $scope, materialSrv, $state ) {

	getMaterials = () => {
		materialSrv.getAllMaterials()
		.then( res => {
			$scope.allMaterials = res;
			console.log( 'materials', res );
		} );
	};
	
	$scope.getRep = ( repId ) => {
		$state.go( `rep`, { 'id': repId } );
	};

	$scope.goToUpdateMaterial = ( id ) => {
		$state.go( `materialInfo`, { id } );
	};

	$scope.goToCreateMaterial = () => {
		$state.go( `materialInfo`, { 'id': `create` } );
	}

	getMaterials();

} );
