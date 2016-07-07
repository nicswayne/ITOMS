angular.module( 'ITOMS' )
.controller( 'repCtrl', function( $scope, repSrv, $stateParams ) {

	 getRep = ( id ) => {
		repSrv.getOneRep( id )
			.then( ( res ) => {		
				$scope.implantShow = res.implants.length !== 0;
				$scope.drugShow = res.drugs.length !== 0;
				$scope.materialShow = res.materials.length !== 0;
				$scope.rep = res;
				console.log( "res", res );
			}
		);
	 };

	 getAllReps = () => {
		repSrv.getReps()
			.then( ( res ) => {
				return $scope.reps = res;
			} );
	 };

	 getAllReps();
	 getRep( $stateParams );

	 $scope.reorderNeeded = function( item ) {
		return item.onHand < item.minOnHand;
	 };

	 $scope.amountToReorder = function( item ) {
		return item.minOnHand - item.onHand;
	 };

	 // console.log( $stateParams.id );

} );
