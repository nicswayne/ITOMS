angular.module('ITOMS')
.directive('patientSidebar', function(){
    
    return {
        
        templateUrl: './navbar/patientSidebar.html'
        , controller: function( $scope ) {
            $scope.implants = () => {
                $state.go(`implant`, {
                    url: `/implants/:ptid/:id`
                });
            };
            $scope.drugs = () => {
                $state.go(`drug`, {
                    url: `/drugs/:ptid/:id`
                });
            };
            $scope.referrals = () => {
                $state.go(`referral`, {
                    url: `referrals/:ptid/:id`
                });
            };
            $scope.boneGrafts = () => {
                $state.go(`boneGraft`, {
                    url: `boneGraft/:ptid/:id`
                });
            };
        }         
    };
});