angular.module( 'ITOMS' )
.controller( 'repInfoCtrl', function( $scope, repSrv, $stateParams, $state ) {

	getRep = ( id ) => {
		repSrv.getOneRep( id )
			.then( ( res ) => {	
				$scope.implantShow = res.implants.length !== 0;
				$scope.drugShow = res.drugs.length !== 0;
				$scope.materialShow = res.materials.length !== 0;
				$scope.rep = res;
			}
		);
	 };

	 getRep( $stateParams );

	 $scope.reorderNeeded = function( item ) {
		return item.onHand < item.minOnHand;
	 };

	 $scope.amountToReorder = function( item ) {
		return item.minOnHand - item.onHand;
	 };

} );
