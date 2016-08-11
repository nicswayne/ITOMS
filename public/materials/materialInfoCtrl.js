angular.module( 'ITOMS' )
.controller( 'materialInfoCtrl', function( $scope, materialSrv, $state, $stateParams, loginSrv ) {

	getMaterialInfo = ( id ) => {
		if ( id.id === `create` ) {
			return;
		}
		materialSrv.getOneMaterial( id )
			.then( ( res ) => {
				$scope.materialInfo = res;
			} );
	};

	$scope.clear = () => {
		$state.go( `materials` );
		return;
	};

	$scope.goToUpdateMaterial = ( id ) => {
		if ( loginSrv.hasRight( `updateMaterial` ) ) {
			$state.go( `materialInfo`, { id } );
		}
	};

	$scope.updateMaterialInfo = ( obj ) => {
		if ( loginSrv.hasRight( `updateMaterial` ) ) {
			materialSrv.updateMaterial( obj, $stateParams )
			.then( res => {
				$state.go( $state.current, { 'id': res._id }, { reload: true } );
			} );
		}
	};

	$scope.createMaterial = ( obj ) => {
		if ( loginSrv.hasRight( `createMaterial` ) ) {
			materialSrv.createMaterial( obj )
				.then( res => {
					$state.go( `materials` );
				} );
		}
	};
	$scope.params = $stateParams.id !== `create`;

	getMaterialInfo( $stateParams );

} );
