angular.module('ITOMS')
.directive('navbarDir', function(  ) {

	return {

		templateUrl: './navbar/navbar.html'
		, controller: function( $scope, $state ) {
			$scope.findAllImplants = () => {
				$state.go( `implants`, {
					url: `/implants`
				} );
			};
			$scope.drugs = () => {
				$state.go(`drugs`, {
					url: `/drugs`
				} );
			};
			$scope.referrals = () => {
				$state.go(`referrals`, {
					url: `/referrals`
				} );
			};
			$scope.patients = () => {
				$state.go(`patients`, {
					url: `/patients`
				} );
			};
			$scope.admin = () => {
				$state.go(`admin`, {},{
					location: true
				} );
			};
			$scope.materials = () => {
                $state.go( `materials`, {
					url: `/materials`
                } );
			};
            $scope.boneGrafts = () => {
                $state.go( `boneGrafts`, {
					url: `/boneGrafts`
                } );
            };
            $scope.repsPage = () => {
				$state.go( `reps`, {
					url: `/reps`
				} );
            };
		}
	};
} );
