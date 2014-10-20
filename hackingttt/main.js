var TTTApp = angular.module('TTTApp', ['firebase']);

TTTApp.controller('TTTController', function ($scope, $firebase) {
var ticTacRef = new Firebase("https://testttttest.firebaseio.com");
var sync = $firebase(ticTacRef) ;
sync.$bind($scope, "db");

ticTacRef.once("value", function(data){
  console.log(data.val());
    console.log($scope.imPlayer);
  if(!data.val() || data.val().numPlayers == 2){
    $scope.imPlayer = 0;
  }
  else {
    $scope.imPlayer = 1;
  }
});

// $scope.db={
//   movecounter = $scope.movecounter,
//   cellList = $scope.cellList,
//   numPlayers: $scope.imPlayer +1
// }
// });

//player pick box
  $scope.playerPicks = function(oneCellObject) {
    if (oneCellObject.xoStatus == "X" || oneCellObject.xoStatus == "O" || $scope.imPlayer != ($scope.db.movecounter % 2)){
      return;
    }

    // uncomment and look in console
    // console.log("Cell was: " + oneCellObject.xoStatus);

    //"c" is the first letter of the name of a property being attached to the xmoves object. ex: c1 c2 c3...c8
    //we're using the xMoves and oMoves objects as if they were arrays. 
    var status;
    $scope.db.movecounter++;
    if (($scope.db.movecounter % 2) == 1) {
      // the following line is as if we're pushing the net move value on to the xMoves "array"(it's really an object).
      $scope.db.xMoves["c" + oneCellObject.xoStatus] = oneCellObject.xoStatus;
      oneCellObject.xoStatus = "X" ;
      status = testWin($scope.db.xMoves);
      console.log($scope.db.xMoves);
    } else {

      $scope.db.oMoves["c" + oneCellObject.xoStatus] = oneCellObject.xoStatus;
      oneCellObject.xoStatus = "O" ;
      status = testWin($scope.db.oMoves);
      console.log($scope.db.oMoves);
      console.log()
    }

    if(status.length > 0) {
      $scope.db.notification = status;
    }
    // uncomment and look in console
    // console.log("Cell is now: " + oneCellObject.xoStatus);
  };

  var testWin = function(moves) {
    var winners = [[0,1,2, "top row"],[3,4,5, "middle row"],[6,7,8, "bottom row"],[0,3,6, "left column"],[1,4,7, "middle column"],[2,5,8, "right column"],[0,4,8, "left diagonal"],[2,4,6, "right diagonal"]
    ];

    // All 8 winning possibilities
    for(var i in winners){
      var count = 0;
      
      // Go through each cell that's a part of this winner
      for (var n=0; n < winners[i].length-1; n++){
        // console.log("count" + count)
        for(var x in moves){
          if(x == "z")
            continue;
          if(winners[i][n] == moves[x]){
            count++;
            console.log(count);
            break;  // If we matched, no need to continue looking for this one
          }
        }
      }
      if (count==3){
        return winners[i][3] + " won";
      }
    }
    if ($scope.movecounter == 9){
      return "Tie";
      console.log("tie")
    }
    else 
      return "";
  };
  
//test connection via console
  $scope.testJS = function() {
    $scope.db.cellList = [
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

    $scope.db.notification = "";

    $scope.db.xMoves = {z:0};
    $scope.db.oMoves = {z:0};

    $scope.testString = "Tic Tac Toe" ;
    $scope.db.movecounter = 0 ;
  } ;
}) ;
