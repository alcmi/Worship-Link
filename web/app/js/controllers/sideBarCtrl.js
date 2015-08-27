angular.module('sideBarCtrl', [])

.controller('SideBarController', function ($rootScope, $scope, $location) {
    var location = $location.path().substring(1);

    function refresh() {
    $scope.items = [
        {
            text: 'Dash Board',
            state: 'dashboard',
            icon: 'fi-graph-bar',
            selected: location.indexOf('dashboard') != -1
        },
        {
            text: 'People',
            state: 'people',
            icon: 'fi-torsos-all',
            selected: location.indexOf('people') != -1
        },
        {
            text: 'Plan',
            state: 'plan',
            icon: 'fi-calendar',
            selected: location == 'plan'
        },
        {
            text: 'Media',
            state: 'media',
            icon: 'fi-eject',
            selected: location == 'media'
        },
        ];
    };

    refresh();

    $rootScope.$on('$stateChangeSuccess',
        function (event, toState, toParams, fromState, fromParams) {
            location = $location.path().substring(1);
            refresh();
        });
});