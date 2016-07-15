angular.module( 'ITOMS' )
.directive( 'navbarDir', function(  ) {

	return {

		templateUrl: './navbar/navbar.html'
		, controller: function( $scope, $state, $cookies, loginSrv ) {

			let user = $cookies.getObject( `user` );
			// console.log( `navbar user cookies`, user );

			$scope.goTo = ( state ) => {
				if ( loginSrv.isLoggedIn() ) {
					$state.go( state, {
						url: `/${ state }`
					} );
				return;
				}
				$state.go( `login` );
			};
            $scope.logout = () => {
            	$cookies.remove( 'user' );
            	$state.go( `login`, {
            		url: `/login`
            	} );
            };

            checkAdmin = () => {
            	if ( user.isAdmin ){
            		$scope.isAdmin = true;
            	}
            }
            checkAdmin();

		}
	};
} );
