angular.module( 'ITOMS' )
.controller( 'loginCtrl', function( $scope, loginSrv, $cookies, $state ) {

	$scope.loginUser = ( obj ) => {
		loginSrv.login( obj )
		.then( ( res ) => {
			$state.go( `home` );
			} );
	};

} );
