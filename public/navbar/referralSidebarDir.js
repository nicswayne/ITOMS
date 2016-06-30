angular.module('ITOMS')
.directive('referralSidebar', function(){
    
    return {
        
        templateUrl: './navbar/referralSidebar.html'
        , controller: function( $scope ) {
            $scope.patients = () => {
                $state.go(`patient`, {
                    url: `/patient/:refid/`
                });
            };
            $scope.notes = () => {
                $state.go(`notes`, {
                    url: `/notes/:id`
                });
            };
        }         
    };
});