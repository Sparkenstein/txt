angular
    .module("txt", [])
    .controller("mainController", ['$scope', mainController]);








function mainController($scope){
    $scope.name = "Spark";
}