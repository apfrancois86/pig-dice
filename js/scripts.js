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
  this.rollScore = Math.floor(Math.random() * 6);
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



//UI logic
$(function(){
  (".roll").click(function(){
  event.preventDefault();

  if (player1.activePlayer === true) {
      player1.rollDice();
      if (player1.rollScore === 1){
        player1.playerSwitch();
        player2.playerSwitch();
      }
      player1.roundScoreGenerator(player1.rollScore);
  });
});
