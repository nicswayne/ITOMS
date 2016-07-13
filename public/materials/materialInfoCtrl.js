angular.module( 'ITOMS' )
.controller( 'materialInfoCtrl', function( $scope, materialSrv, $state, $stateParams ) {

	getMaterialInfo = ( id ) => {
		if ( id.id === `create` ) {
			return;
		}
		materialSrv.getOneMaterial( id )
			.then( ( res ) => {
				$scope.materialInfo = res;
			} );
	};

	$scope.goToUpdateMaterial = ( id ) => {
		$state.go( `materialInfo`, { id } );
	};

	$scope.updateMaterialInfo = ( obj ) => {
		materialSrv.updateMaterial( obj, $stateParams )
		.then( res => {
			$state.go( $state.current, { 'id': res._id }, { reload: true } );
		} );
	};

	$scope.creatematerial = ( obj ) => {
		materialSrv.createMaterial( obj )
			.then( res => {
				$state.go( $state.current, { 'id': res._id }, { reload: true } );
			} );
	};
	$scope.params = $stateParams.id !== `create`;

	getMaterialInfo( $stateParams );

} );
