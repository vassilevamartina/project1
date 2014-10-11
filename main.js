var app = angular.module('TicTacApp', []);
app.controller('TTTCtrl', ["$scope", function ($scope) {
  $scope.board = [
  {status:"A", pos:c0},{status:"A", pos: c1},{status:"A", pos: c2},
  {status:"A", pos:c3},{status:"A", pos: c4},{status:"A", pos: c5},
  {status:"A", pos:c6},{status:"A", pos: c7},{status:"A", pos: c8}];

  $scope.makeMove = function(){
    console.log(this.$index, this.mySingleCell.pos);
  };
}]);
// $scope.winners = [{"c0","c1","c2"},{"c3","c4","c5"},{"c6","c7","c8"},{"c0","c3","c6"},{"c1","c4","c7"},{"c2","c5","c8"},{"c0","c4","c8"},{"c2","c4","c6"}];

// $scope.playerOne  = function
// create a turn keeper object. 
// Create an object player 1 with properties (turn:'0',  symbol:'x')
// $scope.playerTwo 
// Create an object player 2 with properties (turn:'1', symbol:'o')
// ];

  

