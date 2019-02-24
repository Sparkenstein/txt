angular
    .module("txt", [])
    .controller("mainController", ['$scope', mainController]);








function mainController($scope) {
    $scope.gotSyntax = false;
    $scope.save = function () {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
        $scope.gotSyntax = true;
    }
}