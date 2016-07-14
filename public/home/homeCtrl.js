angular.module( 'ITOMS' )
.controller( 'homeCtrl', function( $scope, homeSrv, $state, $cookies, loginSrv ) {

	getInventory = function() {
		if ( loginSrv.isLoggedIn() ) {
			homeSrv.getInventory()
				.then( ( res ) => {
					$scope.drugs = res[ 0 ].drugs;
					$scope.implants = res[ 0 ].implants;
					$scope.materials = res[ 0 ].materials;
					// console.log( $scope.materials );
				}
			);
			return;
		}
		$state.go( `login` );
	};

	getInventory();

	$scope.getRep = function( repId ) {
		$state.go( `rep`, { 'id': repId } );
	};

	$scope.show = false;
} );
