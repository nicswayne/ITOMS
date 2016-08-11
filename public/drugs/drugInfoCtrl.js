angular.module( 'ITOMS' )
.controller( 'drugInfoCtrl', function( $scope, drugSrv, $state, $stateParams, loginSrv ) {

	getDrugInfo = ( id ) => {
		if ( id.id === `create` ) {
			return;
		}
		drugSrv.getOneDrug( id )
			.then( ( res ) => {
				$scope.drugInfo = res;
			} );
	};

	$scope.clear = () => {
		$state.go( `drugs` );
		return;
	};

	$scope.goToUpdateDrug = ( id ) => {
		if ( loginSrv.hasRight( `updateDrug` ) ) {
			$state.go( `drugInfo`, { id } );
		}
	};

	$scope.updateDrugInfo = ( obj ) => {
		if ( loginSrv.hasRight( `updateDrug` ) ) {
			drugSrv.updateDrug( obj, $stateParams )
			.then( res => {
				$state.go( `drugs` );
			} );
		}
	};

	$scope.createDrug = ( obj ) => {
		if ( loginSrv.hasRight( `createDrug` ) ) {
			drugSrv.createDrug( obj )
				.then( res => {
					$state.go( `drugs` );
				} );
			}
	};
	$scope.params = $stateParams.id !== `create`;

	getDrugInfo( $stateParams );

} );
