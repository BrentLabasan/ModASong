var ModASongApp = angular.module('ModASongApp', []);
ModASongApp.controller('MainController', function ($scope) {
    $scope.modifier = "blah";

    $scope.changeModifier(modifier) {
        $scope.modifier = modifier;
    }

    $scope.listOfModifiers = [3, 4];

});