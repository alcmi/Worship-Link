angular.module('worshipLink', 
               ['mm.foundation', 
                'ui.router', 
                'ngAnimate',
                'headerCtrl', 
                'sideBarCtrl', 
                'peopleCtrl',
                'planCtrl',
                'mediaCtrl',
                'profileCtrl'])

.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: '/views/dashboard.html'
        })
        .state('people', {
            url: '/people',
            templateUrl: '/views/people.html',
            controller: 'PeopleController'
        })
        .state('people.profile', {
            url: 'profile',
            templateUrl: '/views/people-profile.html',
            controller: 'ProfileController',
            params: { profile : null }
        })
        .state('plan', {
            url: '/plan',
            templateUrl: '/views/plan.html',
            controller: 'PlanController'
        })
        .state('media', {
            url: '/media',
            templateUrl: '/views/media.html',
            controller: 'MediaController'
        })
        .state('about', {

        });

});