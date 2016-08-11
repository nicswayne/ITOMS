angular.module( 'ITOMS' )
.directive( 'navbarDir', function(  ) {

	return {

		templateUrl: './navbar/navbar.html'
		, controller: function( $scope, $state, $cookies, loginSrv, $stateParams ) {

			let user = $cookies.getObject( `user` );
			// console.log( `navbar user cookies`, user );

			$scope.goTo = ( state ) => {
				if ( loginSrv.isLoggedIn() === true ) {
					$state.go( state, {
						url: `/${ state }`
					} );
				return;
				} else {
  				$state.go( `login` );
        }
			};

      $scope.logout = () => {
        loginSrv.logout();
        $cookies.remove( 'user' );
      	$state.go( `login`, {
      		url: `/login`
      	} );
      };

      checkAdmin = () => {
        const user = $cookies.getObject( 'user' );
      	if ( !user || !user.isAdmin ){
      		return $scope.isAdmin = false;
      	}
        $scope.isAdmin = true;
      }

      checkState = () => {
        if ( $stateParams.id === `login` ) {
          $scope.loginView = true;
          return;
        }
        $scope.loginView = false;
        checkAdmin();

     	}

     	checkState();



    // checkAdmin = () => {
    // 	if ( !user ){
    // 		$scope.isAdmin = false;
    // 	} else if ( user.isAdmin === true ){
    // 		$scope.isAdmin = true;
    // 	}
    // }


		}
	};
} );
