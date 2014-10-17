  var app = angular.module('TicTacApp', []);
app.controller('TTTCtrl', ["$scope", function ($scope) {
  $scope.board = [
  {pos: 0},{pos: 1},{pos: 2},
  {pos: 3},{pos: 4},{pos: 5},
  {pos: 6},{pos: 7},{pos: 8}
  ];
 
  $scope.makeMove = function(){
    console.log(this.$index, this.mySingleCell.pos);
  };
}]);



$scope.restartBoard = function() {
 $scope.board = angular.copy($scope.restartBoard);
 if ($scope.xWon {
  $scope.
 })
}