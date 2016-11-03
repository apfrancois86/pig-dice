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

Player.prototype.turnScore = function() {
  if (this.rollScore === 1)  {
    this.roundScore === 0;
  } else {
    this.roundScore += this.rollScore;
  }
}

Player.prototype.totalCalculator = function() {
  this.totalScore += this.roundScore;
}

Player.prototype.playerSwitch = function () {
    this.activePlayer = false;
}

// while (player1.activePlayer === true) {
//
// }

//UI logic
$(function(){
  $("#roll").click(function(){
  event.preventDefault();
  $(".playerturn").text(this.Player);
  if (player1.activePlayer === true) {
      player1.rollDice();
      if (player1.rollScore === 1){
        player1.playerSwitch();
      }
      player1.turnScore(player1.rollScore);
      $("#die1").text(player1.rollScore);
      $("#player1round").text(player1.roundScore);

    } else if (player1.activePlayer === false)  {
        player2.rollDice();
          if (player2.rollScore === 1) {
            player2.playerSwitch();
            player1.activePlayer = true;
          }
        player2.turnScore(player2.rollScore);
        $("#die1").text(player2.rollScore);
        $("#player2round").text(player2.roundScore);
    }

    else {
     console.log("not working");
    }
  });
  $("#hold").click(function(event){
    event.preventDefault();

  });

});
