angular.module( 'ITOMS' )
.controller( 'repCtrl', function( $scope, repSrv, $stateParams, $state ) {

	 $scope.getRep = ( id ) => {
		$state.go( `rep`, { 'id': id } );
	 };

	 getAllReps = () => {
		repSrv.getReps()
			.then( ( res ) => {
				return $scope.reps = res;
			} );
	 };

	 getAllReps();

	 $scope.reorderNeeded = function( item ) {
		return item.onHand < item.minOnHand;
	 };

	 $scope.amountToReorder = function( item ) {
		return item.minOnHand - item.onHand;
	 };

	 // console.log( $stateParams.id );

} );
