function Player(totalScore, roundScore, rollScore, activePlayer) {
  this.totalScore = totalScore; //total amt of points over rounds
  this.roundScore = roundScore;  //score per turn b4 switching
  this.rollScore = rollScore; //current value of die
  this.activePlayer = activePlayer;

var player1= new Player(0,0,0,true);
var player2= new Player(0,0,0,false);

Player.prototype.rollDice = function() {
  this.rollScore = Math.floor(Math.random() * 6);
}

player.prototype.turnScore = function() {
  
}
