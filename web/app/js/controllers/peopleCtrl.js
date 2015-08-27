angular.module('peopleCtrl', [])

.controller('PeopleController', function($scope) {
    $scope.people = [
        {
            name: 'John Wesley Salvador',
            location: 'Australia',
            contactNumber: '+61 433 312 882',
            image: 'profile.png'
        },
        {
            name: 'Jayson Delos Santos',
            location: 'Philippines',
            contactNumber: '+63 912 4817 2039',
            image: 'jayson.png'
        },
        {
            name: 'Faith Asis',
            location: 'Hong Kong',
            contactNumber: '+852 3423 6741',
            image: 'faith.png'
        },
        {
            name: 'Christian John Felix',
            location: 'Philippines',
            contactNumber: '+63 906 433 790',
            image: 'xian.png'
        }
        
        ];
});