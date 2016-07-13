angular.module( 'ITOMS' )
.controller( 'refCtrl', function( referralSrv, $scope, $stateParams, $state ) {

	getReferral = ( id ) => {
		referralSrv.getReferral( id )
			.then( ( response ) => {
				console.log( "oneRef", response );
				$scope.oneRef = response;
			} );
	};

	$scope.clear = () => {
		$state.go( $state.current, { 'id': $stateParams.id }, { reload: true } );
	};

	$scope.getPatient = ( id ) => {
		$state.go( `pat`, { 'id': id } );
	};

	$scope.updateReferralInfo = ( obj ) => {
		if ( $stateParams.id === `create` ) {
			referralSrv.createReferral( obj )
			.then( res => {
				$state.go( $state.current, { 'id': res._id }, { reload: true } );
			} );
			return;
		}
		referralSrv.updateReferral( $stateParams.id, obj )
			.then( res => {
				$state.go( $state.current, { 'id': res._id }, { reload: true } );
			} );
	};

	getReferral( $stateParams );

} );
