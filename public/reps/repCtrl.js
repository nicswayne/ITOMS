angular.module( 'ITOMS' )
.controller( 'repCtrl', function( $scope, repSrv, $stateParams, $state, loginSrv ) {


	getAllReps = () => {
		repSrv.getReps()
			.then( ( res ) => {
				return $scope.reps = res;
			} );
	};

	 getAllReps();

	$scope.getRep = ( id ) => {
		$state.go( `rep`, { 'id': id } );
	};

	$scope.goToNewRep = () => {
		if ( loginSrv.hasRight( 'createRep' ) ) {
			$state.go( `rep`, { 'id': `create` } );
			return;
		}
	};

	$scope.reorderNeeded = function( item ) {
		return item.onHand < item.minOnHand;
	};

	$scope.amountToReorder = function( item ) {
		return item.minOnHand - item.onHand;
	};

	// console.log( $stateParams.id );

} );
