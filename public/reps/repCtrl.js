angular.module( 'ITOMS' )
.controller( 'repCtrl', function( $scope, repSrv, $stateParams, $state ) {


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

	$scope.goToRep = ( id ) => {
		$state.go( `rep`, { id } );
	};

	$scope.goToNewRep = () => {
		$state.go( `rep`, { 'id': `create` } );
	};

	$scope.goToUpdateRep = ( id ) => {
		$state.go( `rep`, { id } );
	};

	$scope.reorderNeeded = function( item ) {
		return item.onHand < item.minOnHand;
	};

	$scope.amountToReorder = function( item ) {
		return item.minOnHand - item.onHand;
	};

	// console.log( $stateParams.id );

} );
