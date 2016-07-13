angular.module( 'ITOMS' )
.controller( 'repInfoCtrl', function( $scope, repSrv, $stateParams, $state ) {

	getRep = ( id ) => {
		repSrv.getOneRep( id )
			.then( ( res ) => {	
				$scope.implantShow = res.implants.length !== 0;
				$scope.drugShow = res.drugs.length !== 0;
				$scope.materialShow = res.materials.length !== 0;
				$scope.rep = res;
				console.log( 'rep', res );
			}
		);
	 };

	getRep( $stateParams );

	$scope.clear = () => {
		$state.go( $state.current, { 'id': $stateParams.id }, { reload: true } );
	};

	$scope.reorderNeeded = function( item ) {
		return item.onHand < item.minOnHand;
	};

	$scope.amountToReorder = function( item ) {
		return item.minOnHand - item.onHand;
	};

	$scope.updateRepInfo = ( obj ) => {
		if ( $stateParams.id === `create` ) {
			repSrv.createRep( obj )
			.then( res => {
				$state.go( $state.current, { 'id': res._id }, { reload: true } );
			} );
			return;
		} else if ( obj.companies ) {
			obj.companies = obj.companies.split( ', ' );
			$scope.rep.companies.map( ( name ) => {
				obj.companies.unshift( name );
			} );
		}
		repSrv.updateRep( $stateParams.id, obj )
			.then( res => {
				$state.go( $state.current, { 'id': res._id }, { reload: true } );
			} );
	};


} );
