angular.module( 'ITOMS' )
.controller( 'referralCtrl', function( referralSrv, $scope, $state ) {

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
		$state.go( `ref`, { 'id': `create` } );
	};

	$scope.goToUpdateReferral = ( id ) => {
		$state.go( `ref`, { id } );
	};


	getAllReferrals();

} );
