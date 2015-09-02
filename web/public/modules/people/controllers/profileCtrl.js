angular.module('profileCtrl', [])

.controller('ProfileController', function($scope, $stateParams) {
    $scope.item = $stateParams.profile;
});
