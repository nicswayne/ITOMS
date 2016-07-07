angular.module( 'ITOMS' )
.controller( 'homeCtrl', function( $scope, homeSrv, $state ) {

	getInventory = function() {
		homeSrv.getInventory()
			.then( ( res ) => {
				$scope.drugs = res[ 0 ].drugs;
				$scope.implants = res[ 0 ].implants;
				$scope.materials = res[ 0 ].materials;
				// console.log( $scope.materials );
			}
		);
	};

	getInventory();

	$scope.getRep = function( repId ) {
		$state.go( `rep`, { 'id': repId } );
	};

	$scope.show = false;
} );
