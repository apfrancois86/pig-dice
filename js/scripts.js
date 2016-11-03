//business logic
function Player(totalScore, roundScore, rollScore, activePlayer) {
  this.totalScore = totalScore; //total amount of points over rounds
  this.roundScore = roundScore;  //score per turn before switching players
  this.rollScore = rollScore; //current value of die
  this.activePlayer = activePlayer;
}

var player1= new Player(0,0,0,true);
var player2= new Player(0,0,0,false);

Player.prototype.rollDice = function() {
  this.rollScore = Math.floor((Math.random() * 6)+1);
}

Player.prototype.turnScore = function(roundScore, rollScore) {
  if (this.rollScore === 1)  {
    this.roundScore = 0;
  } else  {
    this.roundScore += this.rollScore;
  }
}

Player.prototype.finalScore = function(totalScore, roundScore) {
  this.totalScore += this.roundScore;
  this.roundScore = 0;
}


Player.prototype.playerSwitch = function () {
    this.activePlayer = false;
}



//UI logic
$(function(){

  $("#roll").click(function(){
  event.preventDefault();
  // while (player1.activePlayer === true) {
  //   $("#whosTurn").text("Player 1");
  // }
  if (player1.activePlayer === true) {
      $("#whosTurn").text("Player 1");
      player1.rollDice();
      player1.turnScore(player1.rollScore);
      $("#die1").text(player1.rollScore);
      $("#player1round").text(player1.roundScore);
      if (player1.rollScore === 1){
        player1.playerSwitch();
        $("#whosTurn").text("Player 2");
      }
    } else if (player1.activePlayer === false)  {
        $("#whosTurn").text("Player 2");
        player2.rollDice();
        player2.turnScore(player2.rollScore);
        $("#die1").text(player2.rollScore);
        $("#player2round").text(player2.roundScore);
          if (player2.rollScore === 1) {
            player2.playerSwitch();
            player1.activePlayer = true;
          }
    } else {
     console.log("not working");
    }
    if (player1.totalScore >= 100) {
      $("#player1Wins").show();
      $("#game").hide();
    } else if (player2.totalScore >= 100){
        $("#player2Wins").show();
        $("#game").hide();
        }
  });

  $("#hold").click(function(event){
    event.preventDefault();
    if (player1.activePlayer === true) {
      player1.finalScore();
      $("#player1Total").text(player1.totalScore);
      $("#player1round").empty();
      player1.playerSwitch();
      player2.activePlayer = true;
      $("#whosTurn").text("Player 2");
    } else if (player1.activePlayer === false){
      player2.finalScore();
      $("#player2Total").text(player2.totalScore);
      $("#player2round").empty();
      player2.playerSwitch();
      player1.activePlayer = true;
      $("#whosTurn").text("Player 1");
    } else {
      console.log("not working here");
    }
  });

  $("#player1Wins button").click(function(){
    location.reload();
  });

  $("#player2Wins button").click(function(){
    location.reload();
  });

});
