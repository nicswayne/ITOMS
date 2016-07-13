angular.module( 'ITOMS' )
.controller( 'implantInfoCtrl', function( $scope, impSrv, $state, $stateParams ) {

	getImplantInfo = ( id ) => {
		if ( id.id === `create` ) {
			return;
		}
		impSrv.getOneImplant( id )
			.then( ( res ) => {
				$scope.implantInfo = res;
			} );
	};

	$scope.goToUpdateImplant = ( id ) => {
		$state.go( `implantInfo`, { id } );
	};

	$scope.updateImplantInfo = ( obj ) => {
		impSrv.updateImplant( obj, $stateParams )
		.then( res => {
			console.log( 'res', res );
			$state.go( $state.current, { 'id': res._id }, { reload: true } );
		} );
	};

	$scope.createImplant = ( obj ) => {
		impSrv.createImplant( obj )
			.then( res => {
				$state.go( `implants` );
			} );
	};
	$scope.params = $stateParams.id !== `create`;

	getImplantInfo( $stateParams );

} );
