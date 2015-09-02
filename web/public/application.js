angular.module('worshipLink', 
				['mm.foundation', 
                'ui.router', 
                'ngAnimate',
                'dashboard',
                'core', 
                'people',
                'plan',
                'media'])

.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: '/modules/dashboard/views/dashboard.html'
        })
        .state('people', {
            url: '/people',
            templateUrl: '/modules/people/views/people.html',
            controller: 'PeopleController'
        })
        .state('people.profile', {
            url: 'profile',
            templateUrl: '/modules/people/views/people-profile.html',
            controller: 'ProfileController',
            params: { profile : null }
        })
        .state('plan', {
            url: '/plan',
            templateUrl: '/modules/plan/views/plan.html',
            controller: 'PlanController'
        })
        .state('media', {
            url: '/media',
            templateUrl: '/modules/media/views/media.html',
            controller: 'MediaController'
        })
        .state('about', {

        });

});