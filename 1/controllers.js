/**
 * Created by Maja on 2015-03-11.
 */

var testApp = angular.module('testApp', []);

testApp.controller('HelloController', function ($scope) {
    $scope.greeting = { text: 'Hello' };
});
