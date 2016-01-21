var ModASongApp = angular.module('ModASongApp', []);
ModASongApp.controller('MainController', function ($scope) {
    $scope.modifier = "blah";

    $scope.changeModifier = function(modifier, url) {
        $scope.modifier = modifier;
        $scope.url = url;
    }

    $scope.listOfModifiers = [3, 4];

});