angular.module( 'ITOMS' )
.controller( 'referralCtrl', function( referralSrv, $scope, $state, loginSrv ) {

	getAllReferrals = () => {
		referralSrv.getReferrals()
			.then( ( res ) => {
				// console.log( "ref data", res );
				$scope.allReferrals = res;
			} );
	};

	$scope.goToReferral = ( id ) => {
		$state.go( `ref`, { id } );
	};

	$scope.goToNewReferral = () => {
		if ( loginSrv.hasRight( 'createReferral' ) ) {
			$state.go( `ref`, { 'id': `create` } );
			return;
		}
	};


	getAllReferrals();

} );
