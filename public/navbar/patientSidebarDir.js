angular.module('ITOMS')
.directive('patientSidebar', function(){
   
    return {
       
        templateUrl: './navbar/patientSidebar.html'
        , controller: function( $scope, $stateParams, $state ) {

            $scope.goToPatImplants = () => {
                console.log( 'go to', $stateParams.id );
                $state.go( `ptImplants`, { 'ptId': $stateParams.id } );
            }
        }         
    };
});