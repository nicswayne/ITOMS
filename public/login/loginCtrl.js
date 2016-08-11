angular.module( 'ITOMS' )
.controller( 'loginCtrl', function( $scope, loginSrv, $cookies, $state ) {

	$scope.loginUser = ( obj ) => {
		loginSrv.login( obj )
		.then( ( res ) => {
			// window.location.href = document.index.html
			$state.go( 'home' )
			} );
	};

} );
