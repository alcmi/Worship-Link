angular.module('peopleCtrl', [])

.controller('PeopleController', function ($scope) {
//    var People = $resource('/api/people');
    
    $scope.people = [
        {
            name: 'John Wesley Salvador',
            location: 'Australia',
            contactNumber: '+61 433 312 882',
            title: 'Software Developer',
            image: 'profile.png'
        },
        {
            name: 'Jayson Delos Santos',
            location: 'Philippines',
            contactNumber: '+63 912 4817 2039',
            title: 'Student',
            image: 'jayson.png'
        },
        {
            name: 'Faith Asis',
            location: 'Hong Kong',
            contactNumber: '+852 3423 6741',
            title: 'Architect',
            image: 'faith.png'
        },
        {
            name: 'Christian John Felix',
            location: 'Philippines',
            contactNumber: '+63 906 433 790',
            title: 'Software Developer',
            image: 'xian.png'
        }

        ];
    
    $scope.selected = 0;
    $scope.select = function (index) {
        $scope.selected = index;    
    }
    
});