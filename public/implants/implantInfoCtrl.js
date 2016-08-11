angular.module( 'ITOMS' )
.controller( 'implantInfoCtrl', function( $scope, impSrv, $state, $stateParams, loginSrv ) {

	getImplantInfo = ( id ) => {
		if ( id.id === `create` ) {
			return;
		}
		impSrv.getOneImplant( id )
			.then( ( res ) => {
				$scope.implantInfo = res;
			} );
	};

	$scope.clear = () => {
		$state.go( `implants` );
		return;
	};

	$scope.goToUpdateImplant = ( id ) => {
		if ( loginSrv.hasRight( `updateImplant` ) ) {
			$state.go( `implantInfo`, { id } );
		}
	};

	$scope.updateImplantInfo = ( obj ) => {
		if ( loginSrv.hasRight( `updateImplant` ) ) {
			impSrv.updateImplant( obj, $stateParams )
			.then( res => {
				$state.go( $state.current, { 'id': res._id }, { reload: true } );
			} );
		}
	};

	$scope.createImplant = ( obj ) => {
		if ( loginSrv.hasRight( `createImplant` ) ) {
			impSrv.createImplant( obj )
				.then( res => {
					$state.go( `implants` );
				} );
			}
	};
	$scope.params = $stateParams.id !== `create`;

	getImplantInfo( $stateParams );

} );
