angular.module('ITOMS')
.directive('navbarDir', function(  ) {
	
	return {
		 
		templateUrl: './navbar/navbar.html'
		, controller: function( $scope, $state ) {
			$scope.implants = () => {
				$state.go(`implants`, {
					url: `/implants`
				});
			};
			$scope.drugs = () => {
				$state.go(`drugs`, {
					url: `/drugs`
				});
			};
			$scope.referrals = () => {
				$state.go(`referrals`, {},{
					location: true
				});
			};
			$scope.patients = () => {
				$state.go(`patients`, {},{
					location: true
				});
			};
			$scope.admin = () => {
				$state.go(`admin`, {},{
					location: true
				});
			};
			$scope.materials = () => {
                $state.go( `materials`, {
                    url: `/materials`
                });
            };
            $scope.boneGrafts = () => {
                $state.go( `boneGrafts`, {
                    url: `/boneGrafts`
                });
            };
		}
		 
	};
});