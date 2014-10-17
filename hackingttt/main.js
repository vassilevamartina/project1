var TTTApp = angular.module('TTTApp', []);

TTTApp.controller('TTTController', function ($scope) {



//player pick box
  $scope.playerPicks = function(oneCellObject) {
    if (oneCellObject.xoStatus == "X" || oneCellObject.xoStatus == "O"){
      return;
    }

    // uncomment and look in console
    // console.log("Cell was: " + oneCellObject.xoStatus);
    var status;
    if (($scope.movecounter % 2) == 0) {
      $scope.xMoves.push(oneCellObject.xoStatus);
      oneCellObject.xoStatus = "X" ;
      status = testWin($scope.xMoves);
      console.log($scope.xMoves);
    } else {

      $scope.oMoves.push(oneCellObject.xoStatus);
      oneCellObject.xoStatus = "O" ;
      status = testWin($scope.oMoves);
      console.log($scope.oMoves);
    }

    if(status.length > 0)
    {
      alert(status + " won");
    }
    // uncomment and look in console
    // console.log("Cell is now: " + oneCellObject.xoStatus);
    $scope.movecounter++;
  };

  var testWin = function(moves) {
    var winners = [[0,1,2, "top row"],[3,4,5, "middle row"],[6,7,8, "bottom row"],[0,3,6, "left column"],[1,4,7, "middle column"],[2,5,8, "right column"],[0,4,8, "left diagonal"],[2,4,6, "right diagonal"]
    ];

    // All 8 winning possibilities
    for(var i in winners){
      var count = 0;
      // Go through each cell that's a part of this winner
      for (var n=0; n < winners[i].length-1; n++){
        for(var x in moves){
          if(winners[i][n]==moves[x]){
            count++;
            break;  // If we matched, no need to continue looking for this one
          }
        }
      }
      if (count==3)
        return winners[i][3];
    }
    return "";
  };
  
//test connection via console
  $scope.testJS = function() {
    $scope.cellList = [
      {xoStatus: 0}, 
      {xoStatus: 1}, 
      {xoStatus: 2}, 
      {xoStatus: 3}, 
      {xoStatus: 4}, 
      {xoStatus: 5}, 
      {xoStatus: 6}, 
      {xoStatus: 7}, 
      {xoStatus: 8}
    ];

    $scope.xMoves = [];
    $scope.oMoves = [];

    $scope.testString = "Tic Tac Toe" ;
    $scope.movecounter = 0 ;
  } ;
}) ;
